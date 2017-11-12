// express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4009;

// request handlers
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/hacksu', (req, res) => {
	if(!!!req.usr || !!!req.pwd) {
		res.redirect('/hacksu/login');
	}else{
		res.send('Welcome!');
	}
});

app.post('/hacksu/user/auth', (req, res) => {
	let usr = req.body.usr;
	let pwd = req.body.pwd;
	const cheerio = require('cheerio');
	const { spawn } = require('child_process');
	const fetchUser = spawn('casperjs', ['./fetchUser.js', usr, pwd]);
	var nothingYet = true;
	if(nothingYet) {
		fetchUser.stdout.on('data', data => {
			var $ = cheerio.load(data);
			var out = $('h3').html();
			var date = $('#LIST_VAR2_1').text();
			var time = $('#LIST_VAR3_1').text();
			req.usr = req.body.usr;
			req.pwd = req.body.pwd;
			if(typeof out == 'string' && nothingYet) {
				nothingYet = false;
				res.json({
					'success': true,
					'SUID': out.split('<br>')[0],
					'firstName': out.split('<br>')[1].split(', ')[1],
					'lastName': out.split('<br>')[1].split(', ')[0],
					'registration': `${date} ${time}`
				});
			}else if(typeof out == 'object' && nothingYet){
				nothingYet = false;
				res.json({
					'success': false,
					'reason': 'incorrect username/password'
				});
			}
		});
	}
});

app.get('/hacksu/login', (req, res) => {
	res.send('pls login');
});

// block unauthenticated users
app.use((req, res, next) => {
	if(!!!req.usr || !!!req.pwd) {
		res.status(403);
		res.send('FORBIDDEN');
	}
});

// 404 Not Found
app.use((req, res, next) => {
	res.status(404);
	res.redirect('/hacksu/404');
});
app.get('/hacksu/404', (req, res) => {
	res.status(404);
	res.send('404 NOT FOUND');
});

// start express server
if(!module.parent) {
	app.listen(PORT, _ => {
		console.log(`Server listening at port ${PORT}`);
	});
}

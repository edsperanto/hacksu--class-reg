// express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4009;

// request handlers
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// temporarily store usr/pwd for session
app.use((req, res, next) => {
	// check with SUOnline before doing this:
	req.usr = req.body.usr;
	req.pwd = req.body.pwd;
	console.log('usr: ', req.body.usr);
	console.log('pwd: ', req.body.pwd);
	next();
});

// routes
app.get('/hacksu', (req, res) => {
	if(!!!req.usr || !!!req.pwd) {
		res.redirect('/hacksu/login');
	}else{
		res.send('Welcome!');
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

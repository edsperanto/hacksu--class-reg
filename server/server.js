// express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4009;

// request handlers
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// set a cookie
app.use((req, res, next) => {
	var cookie = req.cookies.cookieName;
	if(!!!cookie) {
		var rnd = Math.random().toString();
		var options = { maxAge: 900000, httpOnly: true };
		rnd = rnd.substring(2, rnd.length);
		res.cookie('cookieName', rnd, options);
		console.log('cookie created successfully');
	}else{
		console.log('cookie exists: ', cookie);
	}
	next();
});

// routes
app.get('/', (req, res) => {
	res.send('ayy lmao');
});

// start express server
if(!module.parent) {
	app.listen(PORT, _ => {
		console.log(`Server listening at port ${PORT}`);
	});
}

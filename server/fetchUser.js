const fs = require('fs');
const casper = require('casper').create();
const url = 'https://webadvisor.seattleu.edu/WAPROD/WebAdvisor?TYPE=M&PID=CORE-WBMAIN';
const usr = casper.cli.get(0);
const pwd = casper.cli.get(1);

var go = casper.start(url)
	.then(function() { this.click('#acctLogin a') })
	.thenEvaluate(function(usr, pwd) {
		document.querySelector('input[name="USER.NAME"]').setAttribute('value', usr);
		document.querySelector('input[name="CURR.PWD"]').setAttribute('value', pwd);
		document.querySelector('form[name="datatelform"]').submit();
	}, usr, pwd)
	.then(function() { this.click('.WBST_Bars') })
	.then(function() { this.click('.left ul:nth-child(6) li:nth-child(1) a') })
	.then(function() { 
		console.log(this.getHTML());
	});
	
go.run();

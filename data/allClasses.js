const fs = require('fs');
const casper = require('casper').create();
const url = 'https://webadvisor.seattleu.edu/WAPROD/WebAdvisor?TYPE=M&PID=CORE-WBMAIN';
const usr = casper.cli.get(0);
const pwd = casper.cli.get(1);

function getTerms() {
	var terms = document.querySelectorAll('select[name="VAR1"] option');
	return Array.prototype.map.call(terms, function(e) {
		return e.getAttribute('value');
	}).slice(1,4);
}

casper.start(url)
	.then(function() { this.click('#acctLogin a') })
	.thenEvaluate(function(usr, pwd) {
		console.log('usr: ', usr);
		console.log('pwd: ', pwd);
		document.querySelector('input[name="USER.NAME"]').setAttribute('value', usr);
		document.querySelector('input[name="CURR.PWD"]').setAttribute('value', pwd);
		document.querySelector('form[name="datatelform"]').submit();
	}, usr, pwd)
	.then(function() { this.click('.WBST_Bars') })
	.then(function() { this.click('.left ul:nth-child(6) li:nth-child(3) a') })
	.then(function() { this.echo(this.getTitle()) })
	/*
	.then(function() { terms = this.evaluate(getTerms) })
	.then(function() {
		console.log(terms);
	})
	*/
	.then(function() { 
		this.click('select[name="VAR1"]');
		this.evaluate(function() {
			var term = document.querySelector('select[name="VAR1"]');
			term.selectedIndex = 2;
			$(term).change();
		});
	})
	.thenEvaluate(function() {
		document.querySelector('form[name="datatelform"]').submit();
	})
	.then(function() { 
		console.log(this.getHTML());
	})
	.then(function() { casper.capture('18WQ.png') })
	.run();

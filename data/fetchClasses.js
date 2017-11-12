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

var go = casper.start(url)
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
	});

	function loopThru(cb, n) {
		if(n > 0) {
			var iter = cb
			.then(function() {
				fs.write('./18WQ/p' + (66-n+1) + '.html', this.getHTML(), 'w');
			})
			.then(function() {
				this.click('input[value="NEXT"]');
			});
			return loopThru(iter, n-1);
		}else{
			return cb;
		}
	}

var looped = loopThru(go, 66);
	
looped.run();

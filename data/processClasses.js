const Promise = require('bluebird');
const cheerio = require('cheerio');
const fs = Promise.promisifyAll(require('fs'));

for(let i = 1; i <= 66; i++) {
	fs.readFileAsync(`./18WQ/p${i}.html`, 'utf8')
		.then(cheerio.load)
		.then($ => {
			console.log($('table[summary="Sections"]').html());
		})
}

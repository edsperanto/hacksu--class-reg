const Promise = require('bluebird');
const cheerio = Promise.promisifyAll(require('cheerio'));
const fs = Promise.promisifyAll(require('fs'));
const PAGES = 66;

for(let i = 1; i <= PAGES; i++) {
	let data = {
		'term': [],
		'status': [],
		'title': [],
		'meeting': [],
		'core': [],
		'faculty': [],
		'acw': [],
		'credits': [],
		'comments': []
	};
	fs.readFileAsync(`./18WQ/p${i}.html`, 'utf8')
		.then(cheerio.load)
		.then($ => {
			$('.WSS_COURSE_SECTIONS p').each(function(i, elm) {
				data['term'].push($(this).text());
			});
			$('.LIST_VAR1 p').each(function(i, elm) {
				data['status'].push($(this).text());
			});
			$('.SEC_SHORT_TITLE a').each(function(i, elm) {
				data['title'].push($(this).text());
			});
			$('.SEC_MEETING_INFO p').each(function(i, elm) {
				data['meeting'].push($(this).text());
			});
			$('.LIST_VAR19 p').each(function(i, elm) {
				data['core'].push($(this).text());
			});
			$('.SEC_FACULTY_INFO p').each(function(i, elm) {
				data['faculty'].push($(this).text());
			});
			$('.LIST_VAR5 p').each(function(i, elm) {
				data['acw'].push($(this).text());
			});
			$('.SEC_MIN_CRED p').each(function(i, elm) {
				data['credits'].push($(this).text());
			});
			$('.LIST_VAR11 p').each(function(i, elm) {
				data['comments'].push($(this).text());
			});
		})
	.then(_ => {
		setTimeout(_ => {
			fs.writeFile('./18WQ/p' + i + '.json', JSON.stringify(data), 'utf8');
		}, 1000);
	});
}

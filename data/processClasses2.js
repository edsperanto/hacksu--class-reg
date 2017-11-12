const fs = require('fs')
const p1 = require('./18WQ/p1');

var total = {};

function compile(page) {
	let empty = [];
	let data = require(`./18WQ/p${page}`);
	let length = data['term'].length;
	function getName(str) {
		let section = str.split(' ')[0];
		return section.split('-').slice(0, 2).join('-');
	}
	function getSection(str) {
		let section = str.split(' ')[0];
		return section.split('-')[2];
	}
	function getTitle(str) {
		let split = str.split(' ');
		return split.slice(1, split.length).join(' ');
	}
	function getStartDate(str) {
		let dates = str.trim().split(' ')[0];
		return dates.split('-')[0];
	}
	function getEndDate(str) {
		let dates = str.trim().split(' ')[0];
		return dates.split('-')[1];
	}
	function getFormat(str) {
		return str.trim().split(' ')[1];
	}
	function splitSec(str, cb) {
		let arr = str.split(';').map(s => s.trim());
		let finalStr = "";
		for(let i = 0; i < arr.length; i++) {
			finalStr += cb(arr[i]) + ' ';
		}
		return finalStr.trim();
	}

	function findDays(str) {
		let finalStr = "";
		if(str.indexOf('Monday') > -1) finalStr += 'M';
		if(str.indexOf('Tuesday') > -1) finalStr += 'T';
		if(str.indexOf('Wednesday') > -1) finalStr += 'W';
		if(str.indexOf('Thursday') > -1) finalStr += 'R';
		if(str.indexOf('Friday') > -1) finalStr += 'F';
		if(str.indexOf('Saturday') > -1) finalStr += 'S';
		if(str.indexOf('Sunday') > -1) finalStr += 'U';
		return finalStr;
	}
	function getDays(str) {
		if(str.indexOf('Days - TBA') > -1) {
			return 'TBA';
		}else{
			return findDays(str);
		}
	}
	function getStartTime(str) {
		if(str.indexOf('Start and End time - TBA') > -1) {
			return 'TBA';
		}else{
			let first = str.split(',').reverse()[2].split(' ');
			return first[first.length-1].split('-')[0];
		}
	}
	function getEndTime(str) {
		if(str.indexOf('Start and End time - TBA') > -1) {
			return 'TBA';
		}else{
			let first = str.split(',').reverse()[2].split(' ');
			return first[first.length-1].split('-')[1];
		}
	}
	function getRoom(str) {
		if(str.indexOf('ARRG, RM DEPT') > -1) {
			return 'TBA'
		}else{
			let commaDel = str.split(',').map(s => s.trim());
			let l = commaDel.length;
			return commaDel[l-2] + ', ' + commaDel[l-1];
		}
	}
	for(let i = 0; i < length; i++) {
		let title = data['title'][i];
		let meeting = data['meeting'][i];
		let acw = data['acw'][i].split(' / ');
		empty.push({
			'term': data['term'][i],
			'status': data['status'][i],
			'name': getName(title),
			'section': getSection(title),
			'title': getTitle(title),
			'start date': getStartDate(meeting),
			'end date': getEndDate(meeting),
			'format': getFormat(meeting),
			'days': splitSec(meeting, getDays),
			'start time': splitSec(meeting, getStartTime),
			'end time': splitSec(meeting, getEndTime),
			'room': splitSec(meeting, getRoom),
			'core': data['core'][i],
			'faculty': data['faculty'][i],
			'available': acw[0],
			'capacity': acw[1],
			'waitlist': acw[2],
			'credits': data['credits'][i],
			'comments': data['comments'][i]
		});
	}
	return empty;
}

for(let i = 1; i <= 66; i++) {
	total[i] = compile(i);
}

setTimeout(_ => {
	let complete = [];
	for(let i = 1; i <= 66; i++) {
		complete = complete.concat(total[i]);
	}
	setTimeout(_ => {
		fs.writeFile('18WQ.json', JSON.stringify({'data': complete}), 'utf8');
	}, 2000);
}, 2000);

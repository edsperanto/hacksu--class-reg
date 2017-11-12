const data = require('./18WQ.json')['data'];

var allClasses = data.map((curr) => `${curr['name']}-${curr['section']}`);

var uniqueNames = data.reduce((arr, curr) => {
	if(arr.indexOf(curr['name']) == -1) {
		arr.push(curr['name']);
		return arr;
	}else{
		return arr;
	}
}, []);

var uniqueSubj = uniqueNames.reduce((arr, curr) => {
	let currSubj = curr.split('-')[0];
	if(arr.indexOf(currSubj) == -1) {
		arr.push(currSubj);
		return arr;
	}else{
		return arr;
	}
}, []);

console.log(allClasses);
console.log(`There are ${uniqueNames.length} unique classes`);
console.log(`There are ${uniqueSubj.length} unique subjects`);

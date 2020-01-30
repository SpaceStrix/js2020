// 1.
let str = 'i am in the easycode';
let strRev = '';
for (let i = 0; i < str.length; i++) {
	str[i] === str[0] || str[i - 1] == ' ' ? (strRev += str[i].toUpperCase()) : (strRev += str[i]);
}
console.log(strRev);

// 2.
let strRevers = 'tseb eht ma i';
let strNormal = '';
for (let i = strRevers.length - 1; i >= 0; i--) {
	strNormal += strRevers[i];
}
console.log(strNormal);

// 3.
let factNum = 1;
for (let i = 1; i <= 10; i++) {
	factNum *= i;
}
console.log(factNum);
// 4.
let strSpace = 'javaScript is a pretty good language';
let strSpaceEmpty = '';
for (let i = 0; i < strSpace.length; i++) {
	if (strSpace[i] === strSpace[0] || strSpace[i - 1] == ' ') {
		strSpaceEmpty += strSpace[i].toUpperCase();
	} else if (strSpace[i] === ' ') {
		continue;
	} else {
		strSpaceEmpty += strSpace[i];
	}
}
console.log(strSpaceEmpty);

// 5.
let numArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

for (let value of numArray) {
	if (value % 2 == 0) continue;
	console.log(value);
}
// 6.

let list = {
	name: 'denis',
	work: 'easycode',
	age: 29
};

for (const key in list) {
	if (typeof list[key] === 'string') {
		list[key] = list[key].toUpperCase();
	}
}
console.log(list);

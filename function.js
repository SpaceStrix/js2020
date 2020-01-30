// 1.
function getRes(array) {
	let num = 1;
	if (array.length === 0) return 0;
	for (let i = 0; i < arguments.length; i++) {
		num *= arguments[i];
	}
	return console.log(num);
}
getRes(2, 3, 1, 3, 3);

// 2.
function getRev(string) {
	let getRes = '';
	for (let i = string.length - 1; i >= 0; i--) {
		getRes += string[i];
	}
	return console.log(getRes);
}
getRev('string');

// 3.
function getUnicode(string) {
	let newGetUnicode = '';
	for (let i = 0; i < string.length; i++) {
		newGetUnicode += string[i].charCodeAt(0) + ' ';
	}
	return console.log(newGetUnicode);
}
getUnicode('hello');

// 4.
function compareNum(number) {
	let random = Math.floor(Math.random() * 10);
	console.log(random);
	if (number > 10 || number < 0) {
		return console.log('Такого не может быть!');
	}
	if (number === random) {
		return console.log('Вы выиграли!!!');
	} else {
		return console.log('Вы проиграли!!');
	}
}
compareNum(8);

// 5.
function gerArray(num) {
	let array = [];
	for (let i = 0; i <= num; i++) {
		array.push(i);
	}
	return console.log(array);
}
gerArray(3);
// 6.
function concatArray(array) {
	return array.concat(array);
}
console.log(concatArray([ 1, 2 ]));
// 7.
function changeCollection() {
	let pushArr = [];
	for (let i = 0; i < arguments.length; i++) {
		pushArr.push(arguments[i].splice(1));
	}
	return console.log(pushArr);
}

changeCollection([ 1, 2, 3, 4 ], [ 'a', 'b', 'c' ]);

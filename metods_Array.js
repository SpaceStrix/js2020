// Меторы массивов
// 1) arr.concat - создает новый массив копируя другой.
// arr.concat(копируемый массив(argument)) array.concat(array)
// 2) arr.push() - добавляет элемент в конец массива
// 3) arr.pop() - извлекает элемент из конца массива.
// 4) arr.shift() - извлекает элемент из начала.
// 5) arr.unshift() - добавляет элемент в конец массива.
// 6) arr.splice() - универсальный метод массива который может удалять, заменять, добавлять элементы.
// 7) arr.filter() -

// let user = [
//   { name: "Denis", age: "29", gender: "male" },
//   { name: "Kaly", age: "31", gender: "female" },
//   { name: "Ivan", age: "20", gender: "male" },
//   { name: "Diana", age: "23", gender: "female" }
// ];

// const filterArray = user.filter(function(user) {
//   // переменной присваиваем массив с методом filter() в котором функция приниающая в качестве аргумента сам массив.
//   return user.gender == "female" && user.gender == "male"; // Возврашаем результат метода filter()
// });

// console.log(filterArray);

// // Посчитать общий возраст.
// let personArray = [
//   { name: "Stacey", age: 25, gender: "female" },
//   { name: "Parker", age: 13, gender: "male" },
//   { name: "Kailey", age: 28, gender: "female" },
//   { name: "Mozell", age: 33, gender: "male" }
// ];

/* function getSumAge(personArray, key) {
  let summ = 0;
  for (let i = 0; i < personArray.length; i++) {
    if (typeof personArray[i][key] === "number") {
      summ += personArray[i][key];
    }
  }
  return console.log(`Общий возраст: ${summ} лет`);
}

getSumAge(personArray, "age"); */

// function getSumAge(personArray) {
//   let summ = 0;
//   for (let i = 0; i < personArray.length; i++) {
//     summ += personArray[i].age;
//   }
//   return `Общий возраст: ${summ} лет`;
// }
// let resFn = getSumAge(personArray);
// console.log(resFn);

const users = [
	{
		_id: '5cdce6ce338171bb473d2855',
		index: 0,
		isActive: false,
		balance: 2397.64,
		age: 39,
		name: 'Lucile Finley',
		gender: 'female',
		company: 'ZOXY',
		email: 'lucilefinley@zoxy.com',
		phone: '+1 (842) 566-3328',
		registered: '2015-07-12T09:39:03 -03:00'
	},
	{
		_id: '5cdce6ce0aa8d071fa4f4cc5',
		index: 1,
		isActive: true,
		balance: 2608.48,
		age: 33,
		name: 'Woodward Grimes',
		gender: 'male',
		company: 'FORTEAN',
		email: 'woodwardgrimes@fortean.com',
		phone: '+1 (960) 436-3138',
		registered: '2014-09-08T03:24:39 -03:00'
	},
	{
		_id: '5cdce6ce103de120d32d6fe4',
		index: 2,
		isActive: true,
		balance: 1699.99,
		age: 25,
		name: 'Robinson Coleman',
		gender: 'male',
		company: 'GENMOM',
		email: 'robinsoncoleman@genmom.com',
		phone: '+1 (852) 543-3171',
		registered: '2019-04-23T08:24:58 -03:00'
	},
	{
		_id: '5cdce6cebada7a418d8ccb3d',
		index: 3,
		isActive: true,
		balance: 2621.84,
		age: 25,
		name: 'Austin Benton',
		gender: 'male',
		company: 'ZILIDIUM',
		email: 'austinbenton@zilidium.com',
		phone: '+1 (977) 573-2627',
		registered: '2016-08-02T10:08:24 -03:00'
	},
	{
		_id: '5cdce6ced81fe99596d9cef5',
		index: 4,
		isActive: true,
		balance: 1297.31,
		age: 37,
		name: 'Casandra Stout',
		gender: 'female',
		company: 'ANACHO',
		email: 'casandrastout@anacho.com',
		phone: '+1 (929) 465-3804',
		registered: '2018-04-14T11:27:26 -03:00'
	},
	{
		_id: '5cdce6ce6c3ae6c4d6f39e88',
		index: 5,
		isActive: false,
		balance: 2165.49,
		age: 20,
		name: 'Valencia Carrillo',
		gender: 'male',
		company: 'XEREX',
		email: 'valenciacarrillo@xerex.com',
		phone: '+1 (977) 522-3378',
		registered: '2014-02-14T11:45:27 -02:00'
	}
];

/* ---------------------------------------- forEach ------------------------------------------------------ */

/* // forEach
users.forEach((user, index, array) => {
	console.log(user, index, array);
}); */

/* ---------------------------------------- filter ------------------------------------------------------ */

/* // filter
const userage = users.filter((user) => user.age < 30); // Вернет новый массив с пользователями которым меньше 30 лет.
console.log(userage); */

/* ---------------------------------------- map ------------------------------------------------------ */

/* // map
const userName = users.map((user) => user.name); // Вернет новый массив только с именами пользователей
console.log(userName); */

/* ---------------------------------------- reduce ------------------------------------------------------ */

/* // reduce
const totalBalanceUser = users.reduce((acc, user) => (acc += user.balance), 0);
console.log(totalBalanceUser); */

/* // reduce object
const reduceObject = users.reduce((acc, user) => {
	acc[user._id] = user; // Создаст объект в котом будут находиться другие объекты.
	return acc;
}, {});
console.log(reduceObject); */

/* ---------------------------------------- some/every ------------------------------------------------------ */

/* // some/every
const genderUserSome = users.some((user) => user.gender === 'male'); // Возвращает true если хотя бы одно значение удовлетвоярет условию, иначе false.
console.log(genderUserSome);

const genderUserEvery = users.every((user) => user.gender === 'male'); // Вернет true если все значения удовлетворяют условию, иначе false.
console.log(genderUserEvery); */

/* ---------------------------------------- find ------------------------------------------------------ */

/* // find
const userName = users.find((user) => user.name === 'Casandra Stout'); // Вернет объект массива с удовлетворяющим полем объекта.
console.log(userName); */

/* ---------------------------------------- sort ------------------------------------------------------ */

/* // sort
const userSort = users.sort((prevAge, nextAge) => prevAge.age - nextAge.age);
console.log(userSort); */

// 1.
let array = [ 1, 2, 3, 5, 8, 9, 10 ];
let newArray = array.map((item) => (item % 2 ? { digit: item, odd: true } : { digit: item, odd: false }));
console.log(newArray);

// 2.
const arrN = [ 12, 4, 50, 1, 0, 18, 40 ];
const resSOme = arrN.some((item) => item === 0);
console.log(resSOme);

// 3.
const arrayWords = [ 'yes', 'hello', 'no', 'easycode', 'what' ];
const arrayWordsRes = arrayWords.some((item) => item.length > 3);
console.log(arrayWordsRes);

// 4.
const arrayObj = [
	{ char: 'a', index: 12 },
	{ char: 'w', index: 8 },
	{ char: 'Y', index: 10 },
	{ char: 'p', index: 3 },
	{ char: 'p', index: 2 },
	{ char: 'N', index: 6 },
	{ char: ' ', index: 5 },
	{ char: 'y', index: 4 },
	{ char: 'r', index: 13 },
	{ char: 'H', index: 0 },
	{ char: 'e', index: 11 },
	{ char: 'a', index: 1 },
	{ char: ' ', index: 9 },
	{ char: '!', index: 14 },
	{ char: 'e', index: 7 }
];

function resArrOs(arrayObj) {
	const arrayObjSort = arrayObj
		.sort((prev, next) => prev.index - next.index)
		.reduce((acc, item) => (acc += item.char), '');
	return arrayObjSort;
}
console.log(resArrOs(arrayObj));

// 5.
const arrArrays = [ [ 14, 45 ], [ 1 ], [ 'a', 'c', 'd' ] ];
const arrLength = arrArrays.sort((prev, next) => prev.length - next.length);
console.log(arrLength);

// 6.
const arrObj = [
	{ cpu: 'intel', info: { cores: 2, сache: 3 } },
	{ cpu: 'intel', info: { cores: 4, сache: 4 } },
	{ cpu: 'amd', info: { cores: 1, сache: 1 } },
	{ cpu: 'intel', info: { cores: 3, сache: 2 } },
	{ cpu: 'amd', info: { cores: 4, сache: 2 } }
];

let red = arrObj.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(red);

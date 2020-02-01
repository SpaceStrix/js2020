/* // 1.
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
  let getRes = "";
  for (let i = string.length - 1; i >= 0; i--) {
    getRes += string[i];
  }
  return console.log(getRes);
}
getRev("string");

// 3.
function getUnicode(string) {
  let newGetUnicode = "";
  for (let i = 0; i < string.length; i++) {
    newGetUnicode += string[i].charCodeAt(0) + " ";
  }
  return console.log(newGetUnicode);
}
getUnicode("hello");

// 4.
function compareNum(number) {
  let random = Math.floor(Math.random() * 10);
  console.log(random);
  if (number > 10 || number < 0) {
    return console.log("Такого не может быть!");
  }
  if (number === random) {
    return console.log("Вы выиграли!!!");
  } else {
    return console.log("Вы проиграли!!");
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
console.log(concatArray([1, 2]));
// 7.
function changeCollection() {
  let pushArr = [];
  for (let i = 0; i < arguments.length; i++) {
    pushArr.push(arguments[i].splice(1));
  }
  return console.log(pushArr);
}

changeCollection([1, 2, 3, 4], ["a", "b", "c"]); */

// 8.

/* let user = [
  { name: "Denis", age: "29", gender: "male" },
  { name: "Ivan", age: "20", gender: "male" },
  { name: "Diana", age: "23", gender: "lady" }
];

function filterUsers(user, key, value) {
  let res = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i][key] === value) {
      res.push(user[i]);
    }
  }
  console.log(res);
  return res;
}

filterUsers(user, "gender", "male"); */

// Посчитать общий возраст.
/* let personArray = [
	{ name: "Stacey", age: 25, gender: "female" },
	{ name: "Parker", age: 13, gender: "male" },
	{ name: "Kailey", age: 28, gender: "female" },
	{ name: "Mozell", age: 33, gender: "male" }
  ];
function getSumAge(personArray) {
  let summ = 0;
  for (let i = 0; i < personArray.length; i++) {
    summ += personArray[i].age;
  }
  return `Общий возраст: ${summ} лет`;
}
let resFn = getSumAge(personArray);
console.log(resFn);
 */

//////// Функции высшего порядка.

function firstFn(arr, fn) {
  let emptyArray = "";
  for (let i = 0; i < arr.length; i++) {
    emptyArray += fn(arr[i]);
  }
  return console.log(`New value: ${emptyArray}`);
}
// 1.
function callBackFn_1(item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
}
// 2.
function callBackFn_2(item) {
  return item * 10 + " ";
}

// 3.
function callBackFn_3(item) {
  return `${item.name} is ${item.age}` + ",";
}
// 4.
function callBackFn_4(item) {
  return (
    item
      .split("")
      .reverse()
      .join("") + ","
  );
}

firstFn(["my", "name", "is", "Trinity"], callBackFn_1);
firstFn([10, 20, 30], callBackFn_2);
firstFn(
  [
    { age: 45, name: "Jhon" },
    { age: 20, name: "Aaron" }
  ],
  callBackFn_3
);
firstFn(["abc", "123"], callBackFn_4);

// 2

let arrayNum = [2, 6, 7, 52, 22];

function every(array, callbackFn) {
  if (!Array.isArray(array) && typeof callbackFn !== "function") return;
  for (let i = 0; i < array.length; i++) {
    if (!callbackFn(array[i])) return false;
  }
  return true;
}

function callbackFn(item) {
  return item > 5;
}

console.log(every(arrayNum, callbackFn));

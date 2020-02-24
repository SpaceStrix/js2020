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

/* function firstFn(arr, fn) {
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

console.log(every(arrayNum, callbackFn)); */

// --------------------------

/*
// 1.
const first = a => b => a - b;
//console.log(first(2)(23));

// 2.
const multiplyM = a => {
  let x = a;
  return b => (x *= b);
};
let res = multiplyM(2);
//console.log(res(3));

// 3.

 const module = (function() {
  let string;
  function setupString(str) {
    if (str.length === "") return (string = "");
    else if (typeof str === "number") return (string = String(str));
    else return (string = str);
  }
  function getString() {
    return string;
  }
  function lengthString() {
    return string.length;
  }
  function reverseString() {
    return string
      .split("")
      .reverse()
      .join("");
  }
  return {
    setupString,
    getString,
    lengthString,
    reverseString
  };
})();
module.setupString("Hello, World");
console.log(module.getString());
console.log(module.lengthString());
console.log(module.reverseString());
 */

/* 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 */

/* 
const module = (function() {
  let result = 0;

  function setupValue(value) {
    result = value;
    return this;
  }

  function plusValue(value) {
    result += value;
    return this;
  }

  function multiplyValue(value) {
    result *= value;
    return this;
  }

  function degValue(value) {
    result = Math.pow(result, value);
    return this;
  }

  function getResult() {
    console.log(result.toFixed(2));
    return this;
  }

  const calcutate = {
    setupValue,
    plusValue,
    multiplyValue,
    degValue,
    getResult
  };
  return calcutate;
})();

module
  .setupValue(1)
  .plusValue(1)
  .multiplyValue(10)
  .degValue(2)
  .getResult();
 */

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function(prew, next) {
    return prew - next;
  });
  return numbers[0] + numbers[1];
}
//console.log(sumTwoSmallestNumbers([2, 12, 41, 23, 1, 8]));

function getPerson(salaryUp) {
  this.salary += salaryUp;
  return `${this.name} ${this.surname} ${this.age} ${this.salary}$`;
}

const obj = {
  name: "Dmitry",
  surname: "Ostin",
  age: 25,
  salary: 1000
  //getPerson
};
//console.log(obj.getPerson());
const res = getPerson.bind(obj);
//console.log(res(1500));

/*  */

function getRes(a = 0) {
  return function(b = 0) {
    return a - b;
  };
}
//console.log(getRes()(6));

function multiplyMaker(c) {
  return function(d) {
    return console.log((c *= d));
  };
}
const multiply = multiplyMaker(2);

// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

const module = (function() {
  let str = "";
  function setupStr(valueSt = "") {
    str = String(valueSt);
  }

  function getString() {
    return str;
  }
  function getStringLength() {
    return str.length;
  }
  function getStringReverse() {
    return str
      .split("")
      .reverse()
      .join("");
  }

  return {
    setupStr,
    getString,
    getStringLength,
    getStringReverse
  };
})();
module.setupStr("Lorem ipsum dolor sit amet");
// console.log(module.getString());
// console.log(module.getStringLength());
// console.log(module.getStringReverse());

const moduleCalc = (function() {
  let result;
  //
  function setString(value) {
    result = value;
    return this;
  }
  //
  function getPlusValue(value) {
    result += value;
    return this;
  }
  //
  function getMultiplyValue(value) {
    result *= value;
    return this;
  }
  //
  function getPowValue(value) {
    result = Math.pow(result, value);
    return this;
  }
  //
  function getFinalValue() {
    result = result.toFixed(2);
    return +result;
  }

  return {
    setString,
    getPlusValue,
    getFinalValue,
    getPowValue,
    getMultiplyValue
  };
})();

let resCalcFn = moduleCalc
  .setString(10)
  .getPowValue(2)
  .getFinalValue();
//
console.log(resCalcFn);

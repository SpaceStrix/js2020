/* // TODO:Числа. Задачи.
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

let num = Math.PI.toFixed(2);
console.log(num);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

console.log(Math.max(22, 54, 84, 5, 15, 6, 3));
console.log(Math.min(22, 54, 84, 5, 15, 6, 3));

// 3. Работа с Math.random:

// a. Получить случайное число и округлить его до двух цифр после запятой
console.log(Math.random().toFixed(2));
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
console.log(Math.floor(Math.random() * 10));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log((0.6 + 0.7).toFixed(2));
// 5. Получить число из строки ‘100$’

console.log(typeof parseInt("100$"));

/* =============================// Числа. Задачи.============================= */

// Строки. Методы.

// 1. Получить первую и последнюю буквы строки  / 2. Сделать первую и последнюю буквы в верхнем регистре

let str = "some test string";
console.log(str[0].toUpperCase());
console.log(str[str.length - 1].toUpperCase());

// 3. Найти положение слова ‘string’ в строке
console.log(str.indexOf("string"));

// 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(str.indexOf(" ", str.indexOf(" ") + 1));

// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(str.substr(5, 4));

// 6. Получить строку с 5-го по 9-й символы
console.log(str.substring(5, 9));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
console.log(str.slice(0, -6));
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
console.log(typeof (a + b).toString(a + b));
/* =============================// Строки. Методы.============================= */

// Основы. Объекты.

// 1,2,3 . Создать объект с полем product, равным ‘iphone’

let obj = {
  product: "iphone",
  price: 100,
  currensy: "dollar",
  details: {
    model: 6,
    color: "red"
  }
};

console.log(obj);

// Основы. Выражения. Конструкция if else
// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let value = "hidden";
if (value == "hidden") {
  value = "visible";
} else {
  value = "hidden";
}

console.log(value);

// 2. Используя if, записать условие:
let numValue = 5;
//  если переменная равна нулю, присвоить ей 1;
if (numValue == 0) {
  console.log(1);
  //   если меньше нуля - строку “less then zero”;
} else if (numValue < 0) {
  console.log("less then zero");
  //   если больше нуля - используя оператор “присвоение”, переменную умножить на 10
} else if (numValue > 0) {
  console.log(numValue * 10);
}

/* 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
 */

let car = {
  name: "Lexus",
  age: 6,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  console.log(car.needRepair);
}

/* 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль. */

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

if (item.discount) {
  item.priceWithDiscount =
    (parseInt(item.price) / 100) * (100 - parseInt(item.discount));
  console.log(item.priceWithDiscount + "$");
} else {
  console.log(item.price);
}

/* 5. Дан следующий код:

let product = {
    name: “Яблоко”,
    price: “10$”
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */

let product = {
  name: "Яблоко",
  price: parseInt("15")
};
let min = 10;
let max = 20;

/* if (product.price >= min && product.price <= max) {
  console.log(`Товар со стоимостью ${product.price}$ это ${product.name}`);
} else {
  console.log(`Товар со стоимостью ${product.price}$ не найден`);
} */

product.price >= min && product.price <= max
  ? console.log(`Товар со стоимостью ${product.price}$ это ${product.name}`)
  : console.log(`Товар со стоимостью ${product.price}$ не найден`);

/* =============================// Основы. Объекты.============================= */

// Основы. Тернарный оператор. Switch Case

/* 1. 
Записать в виде switch case следующее условие:
if (a === ‘block’) {
	console.log(‘block’)
} else if (a === ‘none’) {
	console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
	console.log(‘other’)
}
Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
 */

let display = "block";
switch (display) {
  case "block":
    console.log("block");
    break;
  case "none":
    console.log("none");
    break;
  case "inline":
    console.log("inline");
    break;
  case "inline-block":
    console.log("inline-block");
    break;

  default:
    console.log("without any changes");
    break;
}

// Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.
let condition = "hidden" ? "visible" : "hidden";
console.log(condition);

let tern = 0;
tern = tern === 0 ? 1 : tern < 0 ? "less then zero" : tern * 10;
console.log(tern);

/* =============================// Основы. Тернарный оператор. Switch Case.============================= */

// Основы. Циклы.
// TODO:1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let strC = "i am in the easycode";
let newStrC = "";
for (let i = 0; i < strC.length; i++) {
  if (i == 0) {
    newStrC += strC[i].toUpperCase();
  } else if (strC[i - 1] == " ") {
    newStrC += strC[i].toUpperCase();
  } else {
    newStrC += strC[i];
  }
}
console.log(newStrC);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let strRev = "tseb eht ma i";
let strRevNew = "";
for (let i = strRev.length; i > 0; i--) {
  strRevNew += strRev[i - 1];
}
console.log(strRevNew);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let numFa = 1;
for (let i = 1; i < 10; i++) {
  numFa *= i;
}
console.log(numFa);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let strMain = "javaScript is a pretty good language";
let strMainNew = "";
for (let i = 0; i < strMain.length; i++) {
  if (strMain[i - 1] === " " || i === 0) {
    strMainNew += strMain[i].toUpperCase();
  } else if (strMain[i] !== " ") {
    strMainNew += strMain[i];
  }
}
console.log(strMainNew);

let cArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 6. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
  name: "denis",
  work: "easycode",
  age: 29
};

for (let key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);

/* =============================// Основы. Циклы.============================= */

/* ============================= Основы. Функции ============================= */

// 1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3) Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(num) {
  let empty = 1;
  for (let i = 0; i < arguments.length; i++) {
    empty *= arguments[i];
  }
  if (arguments.length === 0) {
    return 0;
  }
  return empty;
}

console.log(multiply(2, 3, 2));

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(revers) {
  let emptyRevers = "";
  for (let i = revers.length; i > 0; i--) {
    emptyRevers += revers[i - 1];
  }
  return console.log(emptyRevers);
}
reverseString("say hello");

//3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: getCodeStringFromText(‘hello’) // “104 101 108 108 111”

function getCodeStringFromText(unicode) {
  let emptyUnicode = "";
  for (let i = 0; i < unicode.length; i++) {
    emptyUnicode += unicode.charCodeAt(i) + " ";
  }
  return console.log(emptyUnicode);
}
getCodeStringFromText("hello");

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }
  return console.log(newArray);
}
getArray(5);

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
  return console.log([].concat(arr, arr));
}
doubleArray([1, 2, 3]);

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  let emptyArray = [];
  for (let i = 0; i < arguments.length; i++) {
    emptyArray[i] = arguments[i].slice(1);
  }
  return console.log(emptyArray);
}
changeCollection(["a", "b", "c"], [2, 3, 4]);

function funcGetUsers(users, gender, male) {
  let objUsers = {
    name: "Dmitry",
    gender: "M",
    age: 25
  };
}
/* ============================= // Основы. Функции ============================= */

console.log(Boolean(undefined));
 */
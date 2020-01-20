// У строки есть свойтво 'str.length' - это длина строки. С помощью (str[0] можно узнать какой элемент строки находится под данным индексом)
// Существует 3 метода поиска подстроки: str.slice(), str.substr(), str.substring()

const str = "Lorem ipsum dolor";
// 1,2.
console.log(
  `${str[0].toUpperCase()}${str.slice(1, -1)}${str[
    str.length - 1
  ].toUpperCase()}`
);
// 3.
console.log(`Начинается с: ${str.indexOf("dolor")} индекса`);
// 4.
console.log(
  `Положение 2-го пробела: ${str.indexOf(" ", str.indexOf(" ") + 1)}`
);
// 5.
console.log(`6 символов: ${str.substr(2, 6)}`);
// 6.
console.log(`Символы с 5 по 9:${str.substring(5, 9)}`);
// 7.
console.log(`Без последних 6: ${str.slice(0, -6)}`);
// 8.
const a = 20;
const b = 20;
const c = String(a) + String(b);
console.log(`Строка: ${c}`);

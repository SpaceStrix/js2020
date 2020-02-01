// Меторы массивов
// 1) arr.concat - создает новый массив копируя другой.
// arr.concat(копируемый массив(argument)) array.concat(array)
// 2) arr.push() - добавляет элемент в конец массива
// 3) arr.pop() - извлекает элемент из конца массива.
// 4) arr.shift() - извлекает элемент из начала.
// 5) arr.unshift() - добавляет элемент в конец массива.
// 6) arr.splice() - универсальный метод массива который может удалять, заменять, добавлять элементы.
// 7) arr.filter() -

let user = [
  { name: "Denis", age: "29", gender: "male" },
  { name: "Kaly", age: "31", gender: "female" },
  { name: "Ivan", age: "20", gender: "male" },
  { name: "Diana", age: "23", gender: "female" }
];

const filterArray = user.filter(function(user) {
  // переменной присваиваем массив с методом filter() в котором функция приниающая в качестве аргумента сам массив.
  return user.gender == "female" && user.gender == "male"; // Возврашаем результат метода filter()
});

console.log(filterArray);

// Посчитать общий возраст.
let personArray = [
  { name: "Stacey", age: 25, gender: "female" },
  { name: "Parker", age: 13, gender: "male" },
  { name: "Kailey", age: 28, gender: "female" },
  { name: "Mozell", age: 33, gender: "male" }
];

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

function getSumAge(personArray) {
  let summ = 0;
  for (let i = 0; i < personArray.length; i++) {
    summ += personArray[i].age;
  }
  return `Общий возраст: ${summ} лет`;
}
let resFn = getSumAge(personArray);
console.log(resFn);

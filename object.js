// Объекты состоят из пар: пара это - ключ(свойство):значеие. где ключ это строка(или же имя свойства)
// Два способа создания объкта: 1) let obj = {} 2) let obj = newObject()
/* 
let obj = {
	name: 'Dmitiy',
	age: 25,
	'my adress': 'From moscow',
};
console.log('age' in obj); // оператрато проверки 'in' вернет false, значит свойста нет.
console.log(obj.city === undefined); // проверка на существование свойста вернет true, значит свойста нет.
--------
- для получения свойтва объекта используют точку console.log(obj.name).
- для удаления свойста из объекта использую оператор 'delete': delete obj.name.
Если свойство состоит из 2х и более слов, то его оборачивают в кавычки: 'my adress' и доступ к нему можно получить только с помощью квадратных скобок obj[my adress].
Свойсвто объекта так же может храниться и в переменной: let objProperty = 'my adress', доступ к ней осущется так же через квадратные скобки [].

Проверка на существоение свойства в объекте происхоидит путем его сравнивания с undefined: obj.name === undefined. 
Так же существует специальный оператор для проверки это 'in': console.log('age' in obj) // true.  
Так же проверку можно сделать с помощью obl.hasOwnProperty('name')


--------
Для перебора свойст массивов используют цикл 'for in'
for (let prop in obj) {
	console.log(obj[prop]);
}
Два объекта равны только в том случае, если это один и тот же объект.

let user = {
	name: 'Don',
	age: 23
};
let userSecond = {
	name: 'Don',
	age: 23
};

let admin = user;

console.log(user);
console.log(admin);
console.log(user === admin); true // они равны друг другу
console.log(user === userSecond); false // они не равны друг другу

*/

// Объекты. Задачи.
// const obj = {
//   product: "iphone"
// };
// obj.price = 100;
// obj.currency = "dollar";
// obj.details = {
//   color: "red",
//   model: "one"
// };
// delete obj.product;
//console.log(obj);

/* -------------------------------- Медоты объектов -------------------------------- */

const obj = {
  isActive: false,
  balance: 2397.64,
  age: 39,
  name: "Lucile Finley",
  gender: "female",
  company: "ZOXY",
  email: "lucilefinley@zoxy.com",
  phone: "+1 (842) 566-3328",
  arr: {
    value: [2, 3, 2]
  }
};

//console.log(obj);
//  Object.assign({}, obj) - Метод не глубокого копирования объекта. В качестве первого аргумента принимает пустой обект {} куда и будет копиваться второй и последующие аргументы т.е объекты который мы хотим скопировать в новый объект. Данный метод не может скопировать объект в виде ключа.
let objAssign = Object.assign({}, obj);
// console.log(objAssign);
// console.log(objAssign.arr === obj.arr); // true

// JSON(stringify(obj)) - В качестве аргумента так же принимает объект, в результате получаем строку на JSON, далее нам нужно вернуть обект с помощью JSON.parse() вкачестве аргумента он примет JSON(stringify(obj)) в результа получим объект скопированный с помощью глубокого копирования.
let objJSON = JSON.parse(JSON.stringify(obj));
// console.log(objJSON);
// console.log(objJSON.arr === obj.arr); // false
// Object.keys(obj) - Возвраает массив ключей объекта. Далее можем работать как с обычным массивом.
let objKeys = Object.keys(obj);
// console.log(objKeys);
// Object.keys(obj) - Возвраает массив значений ключей. Далее можем работать как с обычным массивом.
let objValues = Object.values(obj);
// console.log(objValues);
//  Object.entries() - Возвращает массив массивов, где парами являются ключ:значение.
let objEntries = Object.entries(obj);
// console.log(objEntries);
// Object.fromEntries() - Возвращает объект в котором ключем является первое значение массива, а значением ключа второе значение массива.
let objFromEntries = Object.fromEntries([
  ["a", "value"],
  ["b", "b_value"],
  ["c", "c_alue"]
]);
// console.log(objFromEntries);

/* -------------------------------- Дескрипторы, геттеры и сеттеры свойств -------------------------------- */

// Синтаксис вызова: Object.defineProperty(необходимый обект, своство объекта, параметры(дескриптор))
// Параметры для дескриптора:
/* 
1) value = 'Defaulte' задается значечние по умочанию.
2) writable – значение свойства можно менять, если true. По умолчанию false.
3) configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
4) get – функция, которая возвращает значение свойства. По умолчанию undefined.
5) set – функция, которая записывает значение свойства. По умолчанию undefined.
*/

let dgs = {
  age: 15,
  name: "Lucile Finley",
  gender: "female",
  company: "ZOXY"
};

Object.defineProperty(dgs, "ageName", {
  get: function() {
    return this.age + " " + this.name;
  },
  set: function(value) {
    let sp = value.split(" ");
    this.age = sp[0];
    this.name = sp[1];
  }
});
console.log(dgs.ageName);

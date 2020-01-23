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

let objPro = {
  age: 25,
  arrayFirstName: ["Kay", "Lens", "Popo"],
  lastName: "Smith"
};

if (objPro.gender === undefined) {
  objPro.firsName = "Dima";
} else {
  objPro.firsName = "Dima";
}
console.log(objPro.firsName);
console.log(objPro.arrayFirstName[1]);

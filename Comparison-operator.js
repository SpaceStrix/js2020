// Сттроки сравниваются побуквенно т.е. 'Я > A' // true,  'a > A' // true
// При сравнеии разных типок, они оба приводятся к числу: '03' > 2 // true т.к. '03' стала просто 3, а 3 > 2
// Почти все математические операторы выполняют численное преобразование. Исключение составляет +. Если одно из слагаемых является строкой, тогда и все остальные приводятся к строкам. 1 + '2' // '12' // string. Вычитание всегда преобразует к числу " -9  " - 5 = -14
// При делении к примеру 5 / '5' строка преобразуется к числу.

//------------------
// Число 0, пустая строка "", null, undefined и NaN // false

// Оператор && всегда пытается преобразовать значение к 'false'
// Оператор || всегда пытается преобразовать значение к 'true'

/* 
let a = 0 || 'string';      // true      
let a = 1 && 'string';      // true     
let a = null || 25;         //  true
let a = null && 25;         //  false
let a = null || 0 || 35;    //  true   
let a = null && 0 && 35;    //  false    


12 + 14 + '12'     // 2612 
3 + 2 - '1'        // 4
'3' + 2 - 1        // 31 '3'
true + 2           // 3 
+'10' + 1          // 11 
undefined + 2      // NAN
null + 5           // 5 
true + undefined   // NAN
*/

// 1
let a = "hidden";
if (a === "hidden") {
  a = "visible";
} else {
  a = "hidden";
}
console.log(a);
// 2
let b = 2;
if (b === 0) {
  b = 1;
} else if (b < 0) {
  b = "less then zero";
} else {
  b *= 10;
}

console.log(b);

// 3
let car = {
  name: "Lexus",
  age: 22,
  create: 2008,
  needRepair: false
};

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  car.needRepair;
}
console.log(car);

// 4
let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

if (item.discount !== undefined) {
  item.priceWithDiscount =
    parseInt(item.price) -
    parseInt(item.price) * (parseInt(item.discount) / 100);
  console.log(`Со скидкой ${item.priceWithDiscount}$`);
} else {
  console.log(`Без скидки ${item.price}`);
}

// 5
let product = {
  name: "Яблоко",
  price: "10$"
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("Товар не найден");
}

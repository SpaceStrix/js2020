// Можно создавать одну функцию и вызывать в разных объектах с пмощью "this". this принимает значение первой точки после себя. Для использования цепочки вызовов свойст необходимо чтобы функция возвращала retern this.
// В глобальном вызове 'this' указвает на глобальный объект 'window' console.log(this)
// Метод .apply

function getSocket() {
  console.log(`socket: ${this.socket.toUpperCase()}`);
  return this;
}
function getPrice(currency = "$") {
  console.log(`Price: ${currency}${this.price}`);
}

const intel = {
  socket: 1151,
  generation: "i5",
  core: 6,
  flow: 6,
  cache: "9MB",
  getSocket,
  getPrice,
  price: 120
};
const amd = {
  socket: "AM4",
  generation: "Rayzen 7",
  core: 6,
  flow: 12,
  cache: "16MB",
  price: 80,
  getPrice
};
const via = {
  socket: "c7",
  generation: "L4350E",
  core: 32,
  flow: 64,
  cache: "128MB",
  price: 1200
};
// Метод .call(первый аргумент это контекст вызова, далее до бессконечности принимает аргументы) пример: getPrice.call(amd(контекст), "#$"(аругмент))
getPrice.call(amd, "#$");
// Метод .bind - не вызывает функцию, а возвращает ее с привязанным контекстом. Редко используется, вместо него чаще используют стрелочные функции.
//const getPriceBind = amd.getPrice.bind(amd);
//setTimeout(getPriceBind, 1000);

// «Одалживание метода»
// При помощи call можно легко взять метод одного объекта, в том числе встроенного, и вызвать в контексте другого. Можно скопировать любое свойтво, любого объекта (.push,.pop,.shift,.unshift)
/* function printArgs() {
    arguments.join = [].join; // в аргумент функции скопировали метод массива.
  
    var argStr = arguments.join(':'); // (2)
  
    alert( argStr ); // сработает и выведет 1:2:3
  }
  
  printArgs(1, 2, 3); */

// 1.
const wh = {
  width: 32,
  hight: 16,
  getSquare: function(square = "px") {
    return console.log(`${wh.width * wh.hight}${square}`);
  }
};
wh.getSquare();

// Обычно стрелочные функции присваиваются в переменную cons потому, что не подразомивается что функция будет переопределена. Если необхдимо выполнить в функции одно действие, то можно опустить круглые скобки и return.

/* Пример стрелочной функции с 2-мя аргументами:
const fn = (a, b) => a + b;
console.log(fn(3, 2)); */

/* Пример стрелочной функции без аргументов:
const noArg = () => console.log('Hello');
console.log(noArg()); */

/* Пример стрелочной функции с 1-м аргументом:
const singlArgum = (x) => x * 2;
console.log(singlArgum(4)); */

// В стрелочных функциях отсутствуют аргументы. Проблему отсутствия arguments в стрелочных функциях можно решить путём сочетания функций-стрелок с rest оператором. Остаточные параметры могут быть обозначены через три точки .... Буквально это значит: «собери оставшиеся параметры и положи их в массив».

// 1.

const sum = (...props) => {
	const params = Array.prototype.slice.call(props);

	if (!params.length) return 0;

	return params.reduce(function(prev, next) {
		return prev + next;
	});
};

console.log(sum(1, 2, 3, 4));

function fn(...params) {
	console.log(params);
	let num = 1;
	for (let i = 0; i < params.length; i++) {
		num += params[i];
	}
	return console.log(num);
}
fn(2, 3, 41, 2, 32, 2);

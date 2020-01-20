// Основы.Числа
console.log("toFixed(): " + Math.PI.toFixed(2)); // число PI. toFixed() - выводит кол-во цифр после запятой. Так же toFixed() возвращает значение в виде строки 'typeof toFixed()  === string'
console.log("Math.min: " + Math.min(15, 11, 16, 12, 51, 12, 13, 51)); // Math.min() - Минимальное число.
console.log("Math.max: " + Math.max(15, 11, 16, 12, 51, 12, 13, 51, 556)); // Math.max() Максимальное число.
console.log("Math.random(): " + (Math.random() * 10).toFixed(2)); // Math.random() рандомное число от 0 до 1.
console.log((0.6 + 0.7).toFixed(1));
console.log(parseInt("100$"));
// В числах можно использовать букву 'e' чтобы добавить 'n' нулей, пример:
console.log("'e' добавляет 'n' нулей " + 2e3, 2e-2); // получаем 2000 т.е 3 нуля после буквы 'e'.
console.log("Math.floor: " + Math.floor(5.4)); // Math.floor() - округляет число в меньшую сторону.
console.log("Math.ceil: " + Math.ceil(5.4)); // Math.ceil() - округляет число в большую сторону.
console.log("Math.round: " + Math.round(4.2)); // Math.round() -  Округляет до ближайшего целого числа.
console.log("Math.pow(число, степень): " + Math.pow(2, 10)); // Math.pow(число, степень) - возводит число в степень и имеет два параметра 1-е число, 2-е степень.
console.log(isNaN("string")); // isNaN() - определяет является ли переданное значение 'NaN'.
console.log(isFinite(123)); // isFinite - определяет является ли переданное значение конечным.

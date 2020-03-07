// Получение эмлементов
const con = document.querySelector("div");
const abzac = document.querySelectorAll("p");
// Выводит псевдома массив всем тегов р. Для того чтобы с ним работать как с массивом можно применить один из трех следующим методов.
// 1)console.log(Array.prototype.slice.call(abzac));
// 2)console.log(Array.from(abzac));
// 3)console.log([...abzac]);
// Существует 12 типов DOM узлов, но чащи используют 4 узла:
// 1) document - взодной DOM узел
// 2) узлы-элементы – HTML-теги, основные строительные блоки.
// 3) текстовые узлы - содержат текст.
// 4) комментарии -  иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.

// DOM. Задачи.
// 1
// console.log(document.head);
// 2
// console.log(document.body);
// 3
// console.log(document.body.children);
// 4
// console.log(document.querySelectorAll("div"));
// console.log(document.querySelector("div").children);
// console.log(Array.from(document.querySelector("div").children).slice(1, -1));

// getElementsByTagName возвращает коллекцию элементов, которые соответствуют имени тега. Коллекция живая, то есть все изменения в html будут отображены и в коллекции (в отличие, например, от childNodes).
// document.getElementsByTagName('div');
// [...] вернет коллекцию со всеми дивами на странице

document.getElementsByTagName("*");
// звёздочка означает любой тег - вернутся все элементы на странице

const elem = document.querySelector("p");
//console.log(elem.closest("div"));

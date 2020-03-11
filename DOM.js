// Получение эмлементов
const con = document.querySelector("div");
const abzac = document.querySelectorAll("p");
// Выводит псевдомассив всем тегов р. Для того чтобы с ним работать как с массивом можно применить один из трех следующим методов.
// 1)console.log(Array.prototype.slice.call(abzac));
// 2)console.log(Array.from(abzac));
// 3)console.log([...abzac]);
// Существует 12 типов DOM узлов, но чащи используют 4 узла:
// 1) document - взодной DOM узел
// 2) узлы-элементы – HTML-теги, основные строительные блоки.
// 3) текстовые узлы - содержат текст.
// 4) комментарии -  иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.

// getElementsByTagName возвращает коллекцию элементов, которые соответствуют имени тега. Коллекция живая, то есть все изменения в html будут отображены и в коллекции (в отличие, например, от childNodes).
// document.getElementsByTagName('div');
// [...] вернет коллекцию со всеми дивами на странице

document.getElementsByTagName("*");
// звёздочка означает любой тег - вернутся все элементы на странице

const elem = document.querySelector("p");
// console.log(elem.closest(".container")); // closest - возвращает ближайшего родителя с указанным селектором.
// console.log(elem.parentElement); // parentElement - указывает на прямого родителя для elem
elem.classList.add("p", "paragraph"); // classList.add("p",'paragraph') - добавляет класс выбранному элементу.
elem.classList.remove("p"); // classList.remove("p") - удаляет класс выбранному элементу.
elem.classList.contains("paragraph"); // Проверяет есть ли у элемента данный класс, вернет true или false
elem.classList.toggle("toggle"); // позваляет переключать классы.
elem.className; // className позволяет показать какие есть классы у данного элемента.
elem.setAttribute("align", "left"); // setAttribute - поваляет установить атрибут для тега, первый параметр это атрибут, второй значение

/* 

---------------------- DOM. Задачи. ----------------------

*/

// 1. head
const body = document.body;
// console.log(body);
// 2. body
const head = document.head;
// console.log(head);
// 3. все дочерние элементы body и вывести их вконсоль.
const bodyChildren = document.body.children;
// console.log(bodyChildren);
// 4. первый div и все его дочерние узлы
const div = document.querySelector("div");
// console.log(div);
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
// console.log(Array.from(document.querySelector("div").children).slice(1, -1));

// console.log(document.querySelector("mark").parentElement);
// console.log(document.querySelector("mark").parentNode);

// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

function isParent(parent, child) {
  if (parent.contains(child)) {
    return true;
  }
  return false;
}
const resFn = isParent(
  document.querySelector("article"),
  document.querySelector("a")
);
// console.log(resFn);

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const link = document.querySelectorAll("a");
for (let i = 0; i < link.length; i++) {
  if (!link[i].matches("ul a")) {
    //console.log(link[i]);
  }
}

// 3. Найти элемент, который находится перед и после списка ul
const ul = document.querySelector("ul");
//console.log(ul.previousElementSibling);
//console.log(ul.nextElementSibling);

/* 

---------------------- Манипуляции с DOM. ----------------------

*/

const title = document.querySelector("h1");
title.innerHTML = "<i>Hello</i>"; // innerHTML - позваляет изменить содержимое контейнера.
title.innerText = "New Hello"; // innerText - позваляет менять текстовое содержимое контейнера.

const span = document.createElement("span"); // createElement - позволяет создавать элементы
span.textContent = "span created by createElement";
span.classList.add("myClass"); // добавляем класс
//title.insertAdjacentElement("afterbegin", span); // insertAdjacentElement - позваляет задать позиию для размещения принимает 4 позиции.
title.appendChild(span); // appendChild - добавляет span внутрь элемента, он может быть только один.
// console.log(span);

/* 
Свойства. Задачи. 
*/

// 1. Найти параграф и получить его текстовое содержимое (только текст!)
const paragraph = document.querySelector("p");
console.log(paragraph.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function getTypeNode(ul) {
  return {
    NodeType: ul.nodeType,
    NodeName: ul.nodeName,
    NodeChild: ul.childNodes.length
  };
}
console.dir(getTypeNode(ul));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let ulChildren = document.querySelector("ul").children;
let arr = [...ulChildren].map(elem => elem.textContent);
console.log(arr);

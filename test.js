// const ul = document.querySelector("ul");
//console.log(ul);

// _______________________________
//console.log(document.head);
//console.log(document.body);
//console.log(document.body.children);

// const div = document.querySelector("div");
//console.log(div.children);
//console.log(Array.from(div.children).slice(1, -1));

//const h = document.querySelector("h1");
//console.log(div.matches(".container"));
//console.log(document.querySelector(".container").closest("div"));

/* for (let i = 0; i < div.length; i++) {
  if (div[i].matches("one")) {
    //console.log(div[i]);
  }
} */

function isParent(parent, child) {
  if (parent.contains(child)) {
    return true;
  }
}
//console.log(  isParent(document.body.children[0], document.querySelector("mark")));

const link = Array.from(document.querySelectorAll("a"));

for (let i = 0; i < link.length; i++) {
  if (!link[i].matches("li a")) {
    // console.log(link[i]);
  }
}

let arrUl = Array.from(document.querySelector("ul").children);
let ress = arrUl.map(item => item.textContent);
//console.log(ress);

let p = Array.from(document.querySelector("p"));
// let pRes =

// 3. На li через один (начиная с самого первого) установить класс “item”

// let allLi = document.querySelectorAll("li");
/* for (const item in allLi) {
  if (item % 2 === 0) {
    allLi[item].classList.add("item");
  }
} */
/* let forLi = allLi.forEach((arr, element) => {
  if (element % 2 === 0 || element === 0) {
    arr.classList.add("class");
  }
});
 */

// 4. На все ссылки в примере установить класс “custom-link”

/*
ver.1
 const addClassA = document.querySelectorAll("a");
// console.log(Array.isArray(addClassA));

addClassA.forEach(item => item.classList.add("list")); 
ver.2
const addClassA = Array.from(document.querySelectorAll("a"));
for (const key in addClassA) {
  addClassA[key].classList.add("list");
}
*/

const div = document.querySelector("div");
//const hText = (document.querySelector("h1").innerHTML = "");
// div.removeChild(hText);
const title = document.querySelector("h1");
title.insertAdjacentHTML("beforebegin", "<span> beforebegin </span>");
title.insertAdjacentHTML("afterbegin", "<span> afterbegin </span>");
title.insertAdjacentHTML("beforeend", "<span> beforeend </span>");
title.insertAdjacentHTML("afterend", "<span> afterend </span>");

const ul = document.querySelector("ul");
let newLi = document.createElement("li");
newLi.insertAdjacentText("beforeend", "Link5");
newLi.classList.add("new-item");
ul.appendChild(newLi);

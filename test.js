const ul = document.querySelector("ul");
//console.log(ul);

// _______________________________
//console.log(document.head);
//console.log(document.body);
//console.log(document.body.children);

const div = document.querySelector("div");
//console.log(div.children);
//console.log(Array.from(div.children).slice(1, -1));

const h = document.querySelector("h1");
//console.log(div.matches(".container"));
//console.log(document.querySelector(".container").closest("div"));

for (let i = 0; i < div.length; i++) {
  if (div[i].matches("one")) {
    //console.log(div[i]);
  }
}

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
const li = document.querySelector("li");

let arrUl = Array.from(document.querySelector("ul").children);
let ress = arrUl.map(item => item.textContent);
console.log(ress);

let p = Array.from(document.querySelector("p"));
console.log(p);
// let pRes =

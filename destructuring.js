// Деструкторизация позволяет доставать эдементы массива из массива.
let array = ["white", "black", "yellow", "pink", "red"];
const [w, b, ...other] = ["white", "black", "yellow", "pink", "red"]; // Можно передать несколько параметров, а остаточные передать с помощью оператора res (...)
//console.log(w, b, ...other);

// Деструкторизация позволяет доставать ключи объекта из объекта.
const obj = {
  isActive: false,
  balance: 2397.64,
  info: {
    age: 39,
    name: "Lucile Finley",
    gender: "female"
  },
  company: "ZOXY",
  email: "lucilefinley@zoxy.com",
  phone: "+1 (842) 566-3328",
  arr: {
    value: [2, 3, 2]
  }
};

const { isActive: activ, balance: bal, company: com } = obj; // С помощью : можно изменить название ключей.
// console.log(activ, bal, com); // И использовать ключи уже с новыми именами.

const {
  info: { age, name, gender },
  email
} = obj; // Так же можно дескруктуривать объект в виде ключа.
// console.log(age, name, gender, email);

const { city = "Default" } = obj; // Таким образом можно передать значения по умолчанию, если оно не задано.
// console.log(city);

// Деструктурирующее присваивание. Задачи.

function fnRest(a, ...other) {
  return (fnRestObj = {
    first: a,
    other: [...other]
  });
}
console.log(fnRest("a", "b", "c", "d"));

const organisation = {
  name: "Denis",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};

function getOrganisation({
  name = "Default",
  info: {
    partners: [partners1, partners2]
  }
} = {}) {
  return console.log(name, partners1, partners2);
}
getOrganisation(organisation);

// let fruits = ["apple", "banana", "mango"];

// console.log(fruits);

// fruits.push(["one", "two"]);
// fruits.push("ade");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// let age = [20, 30, 40, 50];

// console.log(age);

// age[2] = "hello";

// console.log(age);

const friends = ["ade", "shina", "bola"];

friends.map((data, index) => {
  console.log(data, index);
});

const students = [
  { id: 1, name: "Favour", age: 30 },
  { id: 2, name: "Shine", age: 32 },
  { id: 3, name: "Mercy", age: 28 },
];

students.map((data, index) => {
  data.age = data.age + 20;

  console.log(data);
});let bankName = "Akams-Bank";

console.log(`Welcome to ${bankName}`);

const bank = [];

function addCustomer(id, name, balance) {
  return bank.push({
    id: id,
    name: name,
    balance: balance,
  });
}

function deductUser(userId) {
  bank.map((d, i) => {
    if (d.id === userId) {
      return (d.balance = d.balance - 50);
    }
  });
}

addCustomer(1, "Favour", 3000);

addCustomer(2, "akams popoola", 4000);
addCustomer(3, "rokiba popoola", 60000);

let a = bank.filter((d, i) => {
  return d.id !== 2;
});

console.log("new filter", a);

console.log("customers details-----------------");
console.log(bank);

// functions

// function add(a, b) {
//   return a + b;
// }

// add(2, 3);

// add(20, 40);

// function ari() {
//   let kkk = add(20, 30);

//   console.log("jjjjjjjjjj", kkk);

//   console.log(kkk + 30);
// }

// ari();

const todos = [
  { id: 1, todo: "Working at Cephas" },
  { id: 2, todo: "wakking push" },
];

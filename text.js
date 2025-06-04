console.log("Hello everyone , this is the first output")

// javascript array mathods with grouping
// example array
const people =[
    {name:"Mercy",age: 18},
    {name:"Victor" , age: 19},
    {name:"Ishola" , age:20},
    {name:"marvelous", age: 19},
    {name:"Hope", age: 20},
    {name:"Favour" , age: 22},
    {name:"Ayo" , age:19},
    ["name","30"],
]
// grouping by objects in the array 
// const output = Object.groupBy(people, person => person.name)
var obj = {...people[5]}
// to find the number of elements in te Array
let numOfPeople = people.length;
// to find the index of elements in an array 
let index = people.indexOf("Ayo");
// using a for loop for increment

// example Object
const Mercy ={
    firstName:"Mercy",
    lastName:"Ojogo",
    level:"400 Level",
    department:"CPE",
    gender:"F",
};
// claname:sswork
const  fruits = [
    "mango",
     {name:"bola", age:30,
     friends:["ade",30, {new: {apple: "green"}}]},
]

// for( let i = 0; i < people.length; i++){

// } 
// calling out specifics in the array 
console.log(people[7][1]);

// calling objects
console.log(fruits[1].friends[2].new.apple)
// example2
const Students =[
    {name:"Mercy", age:18, friends:["acoms", "rachael", "tinuke"]},
    {name:"Hope", relationship:"Single",matric:20000, results:{firstSemester:[{CSC:90, mth:70}]}}
]

let BankName = "Mercy Bank";
console.log(`welcome to ${BankName}`);

const Bank =[];

function addCustomer(name, balance){
    return Bank.push({
      id:id,
      name:name,
      balance:balance,
    })
}
addCustomer(1,"Favour", 1000);
addCustomer(2,"Favourite", 1000);

console.log(Bank)

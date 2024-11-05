// Imagine you have three variables: name, age, and country. Think of values you would assign
//  to each variable that represent your name, age, and the country you live in. Describe what
//   each variable would contain and why.

const name = "Sohail"
let age = 20
let country = "pakistan"

//print all them

// console.log(name);
// console.log(age);
// console.log(country);
  

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let num1 = 1000
let num2 = 208
let sum = num1+num2

// console.log(`Total sum is ${sum }`)


//+++++++++++++++++++++++++++++++ FOR LOOP +++++++++++++++++++++++++++++++++++++++

for (let i = 0; i <= 10; i++) {
   // console.log(i);
}

for (let i = 10; i >=0; i--) {
   // console.log(i);
}

for (let i = 0; i < 20; i += 2) {
   // console.log(i);
}

tableNumber = 5
for (let i = 1; i <= 10; i++) {
//   console.log(i + " X " + tableNumber + " = " + i*tableNumber);  
}

colors = ["yellow", "blue", "black", "red", "green"]

for (let i = 0; i < colors.length; i++) {
//  console.log(colors[i]);
}

// ++++++++++++++++++++++++++ DO While loop ++++++++++++++++++++++++++
let num = 1
do {
   // console.log(num);
   num++  
} while (5 >= num);

// #2

let stotal = 0
let number = 1

do {
  sum += num
  num++
} while (50 > num);
// console.log(`Total sum is ${num}`);

// #3

// let correctpassword = "123456"
// let userpassword

// do {
//    console.log("access denied");
//    let userpassword = prompt("please enter password")
// } while (correctpassword != userpassword);

// 4

let username = "sohail"

function greet(username){
   console.log(`Hello ${username}`);  
}
greet(username)


let N1 = 10
let N2 = 20

function N3(N1,N2) {
   console.log(N1 + N2);
}
N3(N1,N2)

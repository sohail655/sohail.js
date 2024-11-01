function sayMyName (){
console.log("S");
console.log("o");
console.log("h");
console.log("a");
console.log("i");
console.log("l");
}
// sayMyName()

function addTwoNumbers(num1,num2){
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(1,5)
// console.log("result: ",result)

function loginUserMessage(username="sohail"){
    if(!username){
        console.log("please initer your name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage(""));

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(300,555,466,5436,6544,7654));

//passing objects from functions

const user ={
    username: "Sohail ",
    prices : "999"
}

function handleObject(user){
    console.log( `The username is${user.username} and its price is ${user.prices}`)
}

// handleObject(user)

const myNewArray=[
    100,
    130,
    34532,
    5325,
    352
]

function getSecondValue(myNewArray){
    return myNewArray[1]
}
console.log(getSecondValue(myNewArray));

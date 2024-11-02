// const userEmail = "Sohail@gmail.com"

// if (userEmail) {
//     console.log("user logged in");
// }else{
//     console.log("user not logged in");
    
// }
// const userEmail = ""

// if (userEmail) {
//     console.log("user logged in");
// }else{
//     console.log("user not logged in");
    
// }
const userEmail = []

if (userEmail) {
    console.log("user logged in");
}else{
    console.log("user not logged in");
    
}

// falsy values 
// "" , null, undefined , NaN, false , 0, -0, 0n

//truthy values
//"false", "0", " ", {}, [], funaction(){}

// if (userEmail.length===0) {
//     console.log("array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}

//nullish coalescing operator ?? null undefined

let val1
// val1=5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 30
val1 = null ?? 10 ?? 20


console.log(val1);


//terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 50 ? console.log("yes") : console.log("no");
iceTeaPrice >= 50 ? console.log("yes") : console.log("no");


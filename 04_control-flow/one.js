//if

isUserLoggedIn = true
temperature = 41

// if (temperature < 50) {
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("greater than 50");
    
// }

// console.log("Executed");
//<, >, <=, >=, ==, ===, !=, !==

// const score = 200

// if (score>100) {
//     let userPower = "Fly"
//     console.log(` userPower: ${userPower}`);
    
// }


const balance = 1000

// if (balance>500) console.log("true"),console.log("yes"); //oneline condition

if (balance<500) {
    console.log("less than 500");
    
}
else if (balance<700) {
    console.log("less than 700");
    
}
else if (balance<900) {
    console.log("less than 900");
    
}
else if (balance<1100) {
    console.log("less than 1100");
    
}


const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if (userLoggedIn && debitCard && 3==3) {  // And operation
    console.log("allow to buy");  
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("allow to shoping");
    
}

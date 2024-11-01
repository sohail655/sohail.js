//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "sohail",
    age : 19,
    email: "Sohail@gmail.com",
    isLoggedIn:false,
    location:"jampur",
    loggedInDays:["sunday", "monday"],
    [mySym] : "myKey1"
}

// console.log(JsUser.email); //prefer to alwys use it
// console.log(JsUser["email"]); // rare case use
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = " sohail@chatgbt.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)    // freeze mean locked  
// JsUser.email = "Sohailkhan@google.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log(`hello Js user ${this.name}`);   
}

console.log(JsUser.greeting());




 




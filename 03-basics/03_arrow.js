const user ={
    userName: "Sohail",
    price : 999,

    welcomeMessage:function(){
        console.log( `welcome to mywebsite ,${this.userName}`);
       console.log(this)
    }
}
// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let userName = "Sohailkhan"
//     console.log(this.userName);
// }
// chai()

// const chai = function(){
//     let userName="khan"
//     console.log(this.userName);
// }
// chai()

// const chai = ()=>{
//     let userName = "Sohail"
//     console.log(this.userName);
    
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(1,4));
 const addTwo=(num1,num2)=> num1+num2
 console.log(addTwo(544,645));

 const chai = (num1,num2) => ({userName:"sohail"})
 
 console.log(chai(22,43));
 
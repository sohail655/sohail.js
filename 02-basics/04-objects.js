// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.email = "Sohail@gmail.com"
tinderUser.name = "sohail"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser={
    email : "sohail@gmail.com",
    fullname : {
        userfulname :{
            firstName : "sohail",
            ladtName :"ahmad"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfulname);
// console.log(regularUser.fullname.userfulname.firstName); 


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = { 5 : "a", 6:"b"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users =[
    {
        id:"1243",
        email:"s@gmail.com"
    },
    {
        id:"1243",
        email:"s@gmail.com"
    },
    {
        id:"1243",
        email:"s@gmail.com"
    }
]

// console.log(users[1].email);
console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // make a array
// console.log(tinderUser.hasOwnProperty("loggedIn")); 


const course ={
    courseName : "JS in urdu",
    courseInstructor : "sohail",
    price: "999"
}

const {courseInstructor:instructor} = course

console.log(instructor);











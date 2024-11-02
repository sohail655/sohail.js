// for off

const arr = [ 1,2,3,4,5,6,7,8,9,10]
for (const keys of arr) {
    // console.log(keys);   
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet); 
}

const map = new Map()
map.set("IN" , " India")
map.set("PK" , "Pakistn")
map.set("UAE" , " United Arab Emarates")

// console.log(map);

for (const [key, value] of map) {
    // console.log(` map key is ${key} and value is ${value}`);    
}

const myObject = {
    game1 : "gggg",
    game2 : "trsfgd",
    game3 : "trssgfdafg"
}
for (const keys of myObject) { // for of loop not works on objects because objects are not iterable
    console.log(keys);
    
}

const myFriends = ["ali" ,"ahmad", "usman", "asad"]
const yourFriends = ["asmad", "asghar", "abid"]


// myFriends.push(yourFriends)  // it only pushes 
// console.log(myFriends);

// const allFriends = myFriends.concat(yourFriends) // it is good but not famous methods
// console.log(allFriends);

// const ourFriends = [...myFriends, ...yourFriends] // it returns same result but it is good practice this is spread mathod
// console.log(ourFriends);

// const another_array = [1,2,3,[4,5,5,5],8,4,[3,8,[5,6,73,5]]]
// const real_another_array = another_array.flat(Infinity) //this flat methods flat everthing in array
// console.log(real_another_array);

console.log(Array.isArray("sohail"));
console.log(Array.from("sohail")); // it turns strings into array
console.log(Array.from({name : "sohail"})); // it turns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3)); // interesting









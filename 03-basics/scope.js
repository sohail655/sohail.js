var  c= 300

if(true){
    let a = 1
    const b = 2
    var c = 3
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sohail"
    function two(){
        const website = " youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "sohail"
    if (username==="sohail") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username); 

//++++++++++++++++++++++++ Interesting  +++++++++++++++++++++++++++

console.log(addone(66)); // works before
function addone(num){
    return num+1
}



// console.log(addTwo(5));   //not works before
const addTwo = function (num){
    return num + 1
}




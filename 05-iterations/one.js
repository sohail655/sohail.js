//For

for (let i = 0; i <= 10; i++) {
    const element = i;

if (element== 5) {
    // console.log("5 is best number");
    
}
    // console.log(element);
}

for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value is ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value is ${j} and outer loop value is ${i}`);  
        // console.log(i + " X " + j + " = " + i* j);
    } 
}

let myArray = ["ali", "asad","asghar"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); 
}


for (let i = 0; i <=20; i++) {
   if (i==5) {
    console.log("5 is detected");
    break
   }
    // console.log(`The value of index is ${i}`);
    
}
for (let i = 0; i <=20; i++) {
   if (i==5) {
    console.log("5 is detected");
    continue
   }
    // console.log(`The value of index is ${i}`);
    
}
for (let i = 0; i <=20; i++) {
   if (i==5) {
    console.log("5 is detected");

   }
    console.log(`The value of index is ${i}`);
    
}

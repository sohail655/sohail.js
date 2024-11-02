const myObject = {
    javascript: "js",
    python : "py",
    java : "java",
    cpp : "c++"
}

for (const key in myObject) {
    // console.log(`${key} is full form of ${myObject[key]}`); 
}

const coding = ["java", "c++", "js", "py"]

for (const key in coding) {
// console.log(coding[key]);
}

const map = new Map()
map.set("IN" , " India")
map.set("PK" , "Pakistn")
map.set("UAE" , " United Arab Emarates")

for (const key in map) {
   console.log(key);
   
}

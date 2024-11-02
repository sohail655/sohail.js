// for each

const coding = ["java","py","js","c++","php"]
coding.forEach( (item)=>{
    // console.log(item);;
})

function printMe(item){
    // console.log(item); 
}

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr); 
})

const myCoding =[
    {
        languageName:"javaScript",
        shortName : "js"
    },
    {
        languageName:"Cpp",
        shortName : "C++"
    },
    {
        languageName:"python",
        shortName : "py"
    }
]

myCoding.forEach((item)=>{
    // console.log(item);  
})
myCoding.forEach((item)=>{
    console.log(item.languageName);  
})
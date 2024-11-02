const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc, curval)=>{
    console.log(`acc value: ${acc} and current value: ${curval}`);
    
   return acc+curval
},0 )
// console.log(myTotal);

const shoppingCart = [
    {
        course: "1",
        price: 999
    },
    {
        course: "2",
        price: 445
    },
    {
        course: "3",
        price: 546
    }
]

const priceToPay = shoppingCart.reduce( (acc,item)=> acc+item.price,0 )
console.log(priceToPay);

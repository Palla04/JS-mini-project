//reduce on Array

const num = [1,2,3]          

const myNum = num.reduce(function (acc,curr) {     // reduce use for add elements
    console.log(`acc: ${acc} and current val: ${curr}`);
    return acc+curr
},0)

console.log(myNum);
//or

const myNum_1 = num.reduce((acc,curr)=> acc+curr,0)
console.log(myNum_1);


//reduce on Object
const shoppingCart = [
      {
         itemName: "JS course",
         price: 2000
      },
      {
        itemName: "py course",
        price: 900
     },
     {
        itemName: "C course",
        price: 1000
     },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);
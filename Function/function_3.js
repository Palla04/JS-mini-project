// Function with Object and Array:-


// Function with Object
function calculateCartPrice(...num1){ // ... sprade operator/rest operator
    return num1;
}

console.log(calculateCartPrice(200));

console.log(calculateCartPrice(200, 400, 600))

const user = {
    Username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.Username} and price ${anyobject.price}`)
}

handleObject(user);

//or

handleObject({
    Username: "Sam",
    price: 299
})


//Function with Array

const arr=[10, 40, 60, 30]

function returnvalue(getArray){
    return getArray[2]
}

console.log(returnvalue(arr))

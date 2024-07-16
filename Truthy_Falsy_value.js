//Truthy Value

// "0", [], 'false', " ", {}, function(){}

const userEmail = []
//const userEmail = "pall@3048"
// const userEmail = ""
if(userEmail) {
    console.log("Got user Email");
}

else{
    console.log("Don't have user Email");
}

// Falsy Value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN 
                                                // NaN: Not A Number

if(userEmail.length === 0){
    console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Onject is empty");
}


//*********Important***********//

        // false == 0  ----->true
        // false == '' ----->true
        // 0 == ''     ----->true


// Nullish Coalescing Operator (??): null undefined

    //The nullish coalescing ( ?? ) operator is a logical operator 
    //that returns its right-hand side operand when its left-hand 
    //side operand is null or undefined , and otherwise returns its left-hand side operand.
let val1;
// val1 = 5 ?? 10
// val1 = null??10
// val1 = 12??null
// val1 = 100??10

// val1 = undefined??10
val1 = null??10??100      // which value get first
console.log(val1);

//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice  <= 80 ? console.log("less than 80") : console.log("More than 80")
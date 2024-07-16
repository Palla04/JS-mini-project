// Global and Local Scope in JavaScript

//Global scope
let a = 10;
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

if(true) {

    //local scope
    let a = 300;
    const y = 20
    var z = 30

    console.log(a)
}

console.log(a)
//console.log(x);
//console.log(y);
console.log(z);




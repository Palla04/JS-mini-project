const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

//The Math.PI property in JavaScript is not writable because it is defined 
//with specific property descriptors that make it non-writable, non-enumerable,
// and non-configurable. This means you cannot change its value, list it in 
//a loop over properties, or reconfigure its descriptors.
const myNewObject = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('chai nhi bni');
    }
}
console.log(myNewObject);

console.log(Object.getOwnPropertyDescriptor(myNewObject,"name"));
Object.defineProperty(myNewObject, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(myNewObject,"name"));

for(const[key, value] of Object.entries(myNewObject)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
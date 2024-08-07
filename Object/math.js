const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

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
    //Writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(myNewObject,"name"));

for(const[key, value] of Object.entries(myNewObject)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
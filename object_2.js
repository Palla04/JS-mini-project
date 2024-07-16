const tinderUser = new Object()
// const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Pallabi";
tinderUser.isloggedin = false;



console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        Fname:"Pallabi",
        Lname:"Biswas"
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.Fname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign( {},obj1, obj2)

  //sprade
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

console.log(user[1].id);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//checking
console.log(tinderUser.hasOwnProperty('isloggedin'));
console.log(tinderUser.hasOwnProperty('islogged'));
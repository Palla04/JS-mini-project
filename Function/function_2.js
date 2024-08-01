/* Function and Parameter in JavaScript */

console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");

function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

sayMyName();   // function call
sayMyName     //function reference

function add(n1,n2) //here (n1,n2) are parameter
{
    console.log(n1+n2); 
}
add(3,5);    //here (3,5) are arguments
add("a",5);
add("4",5);
add(null,3);

const result = add(7,4);
console.log("Result: ", result);  // as the function does not return any data
                                  // it just print the sum.

function addTwo(n1,n2)
{
    return n1+n2; 
}
const result_1 = addTwo(7,4);
console.log("Result: ", result_1);


function User(username){
    return `${username} just logged in`
}

console.log(User("Pallabi"))
console.log(User())


//If-else

function Login(username){
    if(username === undefined)
        {
            console.log("Enter a user: ")
            return
        }
    else
    {
          return `${username} just logged in`
    }
    
}

console.log(Login());
console.log(Login("Soma"));

//2nd type
function Login_1(username="Sam"){
    if(!username)
        {
            console.log("Enter a user: ")
            return
        }
    else
    {
          return `${username} just logged in`
    }
    
}

console.log(Login_1());
console.log(Login_1("Patit"));


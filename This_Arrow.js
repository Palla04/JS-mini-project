//This Function

const user = {
    username: "Pallabi",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); //this use for access/reffer variable or method in current context.
        console.log(this);
    }
}

user.welcomeMessage();
user.username="Sam"
user.welcomeMessage();

console.log(this); // It reffer empty array

function chai(){
    console.log(this.username); //undefined
}

chai()

//Arrow Function

const hello = () => {
    let username = "Soma"
    console.log(this);
}

hello()


const addTwo = (num1,num2)=>{ 
    return num1+num2     // within curly btacket there need return keyword
}

console.log(addTwo(10,19));

//implecit return

const addThree = (n1,n2,n3)=>(n1+n2+n3) //here no need of return keyword

console.log(addThree(10,19,2));

//for return object
const myData = (name)=>({username: "Pallabi"}) // here use first bracket

console.log(myData("hi"));







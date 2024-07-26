// Object literal

const user = { 
   // Object Properties
    userName : "Pallabi",
    loginCount: 8,
    signedIn : true,
  
  // Object Method
    getUserDetails : function(){
         console.log(`Username: ${this.userName}`);    // 'this' refers to the 'user' object or the current Object
         console.log(this);
    }
}
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this);


const user2 = { 
  // Object Properties
   userName : "Pallabi",
   loginCount: 8,
   signedIn : true,
 
 // Object Method
   getUserDetails : function(){
        console.log(`Username: ${this.userName}`);    // 'this' refers to the 'user' object or the current Object
        console.log(this);
   }
}


function User(username, loginCount, isLoggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
  }

  //return this      // If we return or not it implicitly returns
}

const userOne = new User("Piku", 12, true)  //In JavaScript, 'new' is used to create an instance of an object from a constructor function.
const userTwo = new User("Soma",11,false)   //Without the new keyword, the this inside the constructor function refers to the global object (in non-strict mode) or
                                            //is undefined (in strict mode). Consequently, the properties username, loginCount, and isLoggedIn are assigned to the global object, 


console.log(userOne.greeting());   // after welcome Piku give a undefined as one console between anoher console
userOne.greeting()
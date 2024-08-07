function User(email, password){     // Function behave like function and object both
       this._email = email;
       this._password = password;

       Object.defineProperty(this, 'email',{
              get: function(){
                     return this._email.toUpperCase()
              },
              set: function(value){
                     this._email = value
              }
       })
}

const hello = new User("hello@2024", "Hello")
console.log(hello.email);



// The underscore is a convention to indicate a private property.
// It avoids conflicts between internal properties and public getters/setters.
// It helps to prevent recursion issues in getters and setters.

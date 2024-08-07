class User {
    constructor(email, password){
        this.email = email;
        this.password = password;  //this calls the setter
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){          // getter user to get some value from outside a class
        return this._password.toUpperCase()   // if we don't use underscore There cause a recursion error
    }

    set password(value){
        this._password = value     // if we don't use underscore There cause a recursion error
    }
}

const pallabi = new User("Pall@1234", "abc")
console.log(pallabi.password);
console.log(pallabi.email);


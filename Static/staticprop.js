
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static create_ID(){    // The static keyword defines a static method or field for a class
                           // which is not inherited
        return '123'
    }
}

const Riya = new User("Riya")
// console.log(Riya.create_ID());

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }
}

const Ram = new Teacher("Rama", "Rama@gmail.com", 54321)

// console.log(Ram.create_ID());   //As create_ID is static

console.log(Ram.logMe());

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Pallabi = new Teacher("Pallabi", "Pall@gamil", 123)

Pallabi.addCourse()

const Hello = new User("Patit")
Hello.logMe()

// console.log(Pallabi === Teacher);
console.log(Pallabi instanceof Teacher);
console.log(Pallabi instanceof User);
console.log(Hello instanceof Teacher);
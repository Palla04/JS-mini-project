
// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}`
    }

    changeUsername(){
        return `${this.username}`
    }
}

const Pallabi = new User("Pallabi", "Pallabi2024@gmail.com", 12345)

console.log(Pallabi.encryptPassword());
console.log(Pallabi.changeUsername().toUpperCase());


// behind the scene

function User_1 (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User_1.prototype.readPassword = function(){
    return `${this.password}`
}

User_1.prototype.readUsername = function(){
    return `${this.username}`
}

const Piku = new User_1("Piku", "piku@2024", 123)

console.log(Piku.readPassword());
console.log(Piku.readUsername());
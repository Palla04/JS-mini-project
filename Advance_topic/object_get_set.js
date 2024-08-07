const User = {
    _email: 'hello@20000',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const hi = Object.create(User)
console.log(hi.email);

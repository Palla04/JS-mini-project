
//Prototype

        // let myName = "Pallabi hi     "
        // console.log(myName.trim());
        // console.log(myName.trim().length);


    let myHeros = ["thor","spiderman"]

    let heroPower = {
        thor: "hammer",
        spiderman: "sling",

        getSpiderPower: function(){
            console.log(`Spidy power is ${this.spiderman}`);
        }
    }

    Object.prototype.pallabi = function(){
        console.log(`Pallabi say Hello`);
    }

    myHeros.pallabi()
    heroPower.pallabi()       // As Array can access Object Prototype


    Array.prototype.heyPallabi = function(){
        console.log(`Pallabi say HI `);
    }

    myHeros.heyPallabi()
    //heroPower.heyPallabi()   // As Object can not access Array Prototypes



// Inheritance

    const User = {
        name: "chai",
        email: "Hello2024@gmail.com"
    }

    const Teacher = {
        makeVideo: true
    }

    const TechingSupport = {
        isAvailable: false
    }

    const TASupporter = {
        makeAssignment: "JS Assignment",
        fullTime: true,
        __proto__: TechingSupport
    }

    Teacher.__proto__ = User

    // Morden syntax
    Object.setPrototypeOf(TechingSupport, Teacher)

    let anotherUsername = "Hello         "
    String.prototype.trueLength = function(){
        console.log(`${this}`);
        console.log(`${this.name}`);
        console.log(`true length is : ${this.trim().length}`);
    }

    anotherUsername.trueLength()

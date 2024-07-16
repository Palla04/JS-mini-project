// if


// < > <= >= == != === !==

// === it check data and datatype both
// == it check only data
const isUserloggerIn = true

//type 1

if(2 === "2"){
    console.log("Equal");
}

if(2 !== "2"){
    console.log("Not Equal");
}

//type 2
if(2 == "2"){
    console.log("Equal");
}

if(2 != "2"){
    console.log("Not Equal");
}

//type 3
const price=1000;
if(price>500) console.log("yes");

//type 4
const loggedInFromEmail = true
const loggedInFromGoogle = true

if(loggedInFromEmail && loggedInFromGoogle && 2==2)
    {
        console.log("Allow to buy course");
    }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}


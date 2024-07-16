//Scope level and mini hoisting in JAVASCRIPT

function one(){
    const username = "Pallabi"

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    //console.log(website);
    two()
}

one()

if(true){
    const username = "Hitesh"
    if(username==="Hitesh")
        {
            const website = "Youtube"
            console.log(username + website);
        }

        //console.log(website);  not executable cause website is only accessable in If scope
}

//console.log(username);  not executable cause username is only accessable in If scope


// ++++++++++++++ INTERESTING +++++++++++++

// Another Functiom technique

console.log(addone(5));
function addone(num){   //here before decleration we can access the fun 
    return num+1;
}


const addTwo = function(num){   // it is also called expression
    return num+2;               //here before decleration we can not access the fun
}

console.log(addTwo(5));

// Immediately Invoked Function Expressions 

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
//Immediately Invoked: The () at the end of the function expression immediately invokes it.
(function chai()
{
    console.log(`DB CONNECTED`);
})();   // here we have to put ; at ending otherwise we gat error

// 1st () for declaretion of function and 2nd () for call or execution of the function
//Avoid Global Scope Pollution: Variables inside an IIFE are not accessible from the global scope.

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Pallabi");
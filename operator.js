const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);
console.log("Hello world");

//Arithmetic operator
let a =5;
let b=2;
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
  //Modulas
  console.log("a%b = ",a%b);
  //exponentiation
  console.log("a ** b = ",a ** b);
//unary
   //Increment
   a++;
   console.log("a= ",a);
   //decrement
   a--;
   console.log("a= ",a);

   a=5;
   console.log("a = ",a++);
   console.log("a = ",a);
   
   console.log("++a = ",++a);

//comparision operator
   a=5;
   b=2;
   //equal to
   console.log("a == b", a == b);
   //not equal to
   console.log("a != b", a != b);


   //equal to and type
   a=5;
   b="5";
   //equal to
   console.log("a === b", a === b);
   //not equal to
   console.log("a !== b", a !== b);

//Logical operator
    a=6;
    b=5;
    // && 
    let cond1 = a > b; //true
    let cond2 = a === 5; //false

    console.log("cond1 && cond2 = ", cond1 && cond2);

    // ||
    console.log("cond1 || cond2 = ", a>b || a==b);

    // !
    console.log(" !(6>5) ", !(a>b));

// Ternary Operator
   let age = 24;
   console.log(age >= 18 ? "adult" : "not adult");
    

   
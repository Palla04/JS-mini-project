console.log("hello");

console.log("abc".toUpperCase());

function myFunction(){
     console.log("welcome to kolkata");
     console.log("we are learning js");
}

myFunction();

function hello(msg)//parameter
{
    msg="I Love You";
    console.log(msg);
}

hello();

function Sum(a,b)
{
    //local var -> block scope
    s=a+b;
    console.log("before return");
    return s;   
    console.log("After return");
}

console.log(Sum(3,5));

const mul = (a,b) => {
    return a*b;
}

console.log(mul(3,7));

let r=0;
function vowel(msg){
    for (let i of msg){
        if(i=="a" ||i=="e" ||i=="i" || i=="o"||i=="u")
            r++;
    }
    console.log(r);
}

vowel("Hello");

//forEach function in array

let arr = [1,2,3,4,5];

arr.forEach(function printval(val){ //value at each index
      console.log(val);
});

let abc = ["kolkata","delhi","mumbai"];
abc.forEach((val,idx) => {
     console.log(val.toUpperCase(),idx);
});

let num = [1,2,3,4,5];

num.forEach((val,i)=>{   //square method 1
    console.log(val*val,i);
});

let n = [2,4,6,8];
let calsquare = (n)=>{  //square method 2
    console.log(n*n);
};

n.forEach(calsquare);


// map

let newArr = num.map((val)=>{
     
    return val*3;
});

console.log(newArr);

// Filter

   //let num = [1,2,3,4,5];

let newNum = num.filter((val) =>{
    return val % 2 == 0 && val>3;
});

console.log(newNum);

//reduce

   //let num = [1,2,3,4,5];

const output = num.reduce((res,curr)=>{
       return res+curr;
});

console.log(output);  //15

//find largest

let m = [10,13,6,2,9];

const out = m.reduce((res,curr)=>{
    return res>curr? res:curr;
});

console.log(out);


//practice 1
let marks = [92,78,63,100,93];

let newMarks = marks.filter((val)=>{
    return val>90;
});

console.log(newMarks);

//practice 2

let no = prompt("Enter the limit: ");
let noArr = [];
for(i=1;i<=no;i++)
{
    noArr[i-1]=i;
}

console.log(noArr);
  //sum
const c = noArr.reduce((res,curr) => {
    return res+curr;
});
console.log(c);

//product
const d = noArr.reduce((res,curr) => {
    return res*curr;
});
console.log(d);
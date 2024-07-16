//loop
//practice 2

for(let i=0;i<=100;i++)
{
    if(i%2==1)
      console.log(i);
}

//practice 3

// let game = 25;

// let num = prompt("Enter the number: ");

// while (num != game)
// {
//     num = prompt("you Enter wrong number, guess again: ");
// }

// console.log("congratulation,you enter the right number");

//string

let str = "Pallabi Biswas";

console.log(str.length);
console.log(str[0]);
console.log(str[7]);

//template Literals
let sentence = `This is a template literal`;
console.log(sentence);
console.log(typeof sentence);

let student = {
    item : "Pen",
    price : 20
};

for(let key in student)
{
    console.log("key = ",key,"value = ",student[key]);
}

console.log("the cost of ",student.item," is ",student.price);

let output = `the cost of ${student.item} is ${student.price} rupees`;
console.log(output);

sentence = `This is a template literal ${1+2+3}`;
console.log(sentence);


console.log(`Pallabi \nBiswas`);

console.log(`Pallabi\tBiswas`);

let s = "Apna College";
s = s.toUpperCase();
console.log(s);
s=s.toLowerCase();
console.log(s);
s=s.trim();
console.log(s);


//practice

let name = prompt("Enter the name: ");

console.log(`@${name.toLowerCase()}${name.length}`);
console.log("@"+name.toLowerCase()+ name.length);

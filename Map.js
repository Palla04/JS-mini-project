//Map

const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newNum=myNumber.map( (num)=> num+10)
console.log(newNum);

// chaining

const new_Num_1 = myNumber
                .map((num)=>num*10)
                .map((num)=>num+1)

console.log(new_Num_1);

const new_Num_2 = myNumber
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=> num>30 && num<60)

console.log(new_Num_2);


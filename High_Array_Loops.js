
// for of

const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(greet);
}

// Maps

const map = new Map()
map.set("IND","INDIA")
map.set("USA","United states of America")
map.set("Fr","France")
map.set("IN","INDIA")

console.log(map);

for (const [i,j] of map) {
      console.log(i, ":-", j);  //here i represent key and j represent values
}

// for in
      
      
const obj = {
    game1:"NFS",
    game2:"Spiderman"
  }

  for (const i in obj) {
    console.log(`${i} name is ${obj[i]}`);
  }

const num = ["js","c++","c","Java"]

for (const key in num) {
    console.log(`at position ${key} the value is :`, num[key]);
}

//forEach function in array

let arr1 = [1,2,3,4,5];

arr1.forEach(function printval(val){ //value at each index
      console.log(val);
});

let abc = ["kolkata","delhi","mumbai"];
abc.forEach((val,idx) => {
     console.log(val.toUpperCase(),idx);
});


const myCoding = [
    { languageName : "Javascript",
      languageFile : ".js"
    },
    { languageName : "C Programming",
        languageFile : ".C"
      },
      { languageName : "CPP",
        languageFile : ".c++"
      }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

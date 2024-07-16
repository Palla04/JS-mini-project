let marks = [98,68,92,78,82];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);

marks[3]=90;
console.log(marks);

let heroes = ["ironman", "thor", "hulk", "shaktiman"];
console.log(heroes[0]);
console.log(heroes[1]);

for(let i=0;i<heroes.length;i++)
{
    console.log(heroes[i]);
}

// for of

let cities = ["delhi","panjab","pune","mumbai","kolkata"];
for(let city of cities)
{
    console.log(city.toUpperCase());
    
}

let sum =0;
for(let val of marks)
{
    sum += val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);

let items = [250,645,300,900,50];
let off;
let idx=0
for(let j of items){
    off = j/10;
    items[idx] = items[idx]-off;
    idx++;
}

for(let k=0;k<items.length;k++){
    console.log(items[k]);
}


//String

  //push()
let veggies = ["potato", "apple","litchi","tomato"];
veggies.push("chips","burger","paneer");

console.log(veggies);

//toString()
let m = [98,68,92,78,82];
console.log(m);
console.log(m.toString());

//concat

let hi = ["thor","spiderman","ironman"];
let dc = ["superman","batman"];
let indian = ["shaktiman","krish"];

let actor = hi.concat(dc,indian);
console.log(actor);

//unshift()

hi.unshift("antman");
console.log(hi);

hi.shift();
console.log(hi);

//slice()
  
   //let hi = ["thor","spiderman","ironman"];
    console.log(hi.slice(1,2));

//splice
   //let dc = ["superman","batman"];
   dc.splice(1,1,"hello");
   console.log(dc);

   dc.splice(2,0,101);
   console.log(dc);


//Practice

 let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 console.log(company);
 // 1
 company.shift();
 console.log(company);

 //2
 company.splice(1,1,"Ola");
 console.log(company);

 //3
 company.push("Amazon");
 console.log(company);
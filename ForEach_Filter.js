// **For Each

//type 1
const Coding = ["js","ruby","java","python","cpp"]

const values = Coding.forEach((item)=>{  //foreach does not return any value
    console.log(item);
    //return item;
})
// console.log(values);

//type 2
let num = [1,2,3,4,5,6,7]
const new_num = []
num.forEach((n)=>{
    if(n>4){
        new_num.push(n)
    }
})
console.log(new_num);


// **Filter 

const myNum = [1,2,3,4,5,6,7,8,9,10]

//type 1
const newNum = myNum.filter((num)=> num>4)
console.log(newNum);  // filter can return values

//type 2

const newNumber = myNum.filter((num)=>{
    return num>4
})
console.log(newNumber);

// Operation on a Array Object

const books =[
    {
        title: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004
    },
    {
        title: 'Book two', genre: 'Non-Fiction', publish: 1992,
        edition: 2008
    },
    {
        title: 'Book three', genre: 'History', publish: 1999,
        edition: 2007
    },
    {
        title: 'Book four', genre: 'Non-Fiction', publish: 1989,
        edition: 2010
    },
    {
        title: 'Book five', genre: 'Science', publish: 2009,
        edition: 2014
    },
    {
        title: 'Book six', genre: 'Fiction', publish: 1987,
        edition: 2010
    },
    {
        title: 'Book seven', genre: 'History', publish: 1986,
        edition: 1996
    },
    {
        title: 'Book eight', genre: 'Science', publish: 2011,
        edition: 2016
    },
    {
        title: 'Book nine', genre: 'Non-Fiction', publish: 1981,
        edition: 1989
    }
]

const userBooks = books.filter((item)=> item.genre==='History')
console.log(userBooks);

let user_1_Books = books.filter((item)=> item.publish>=2000)
console.log(user_1_Books);

let user_2_Books = books.filter((item)=> item.publish>=2010 && item.genre=='Science')
console.log(user_2_Books);
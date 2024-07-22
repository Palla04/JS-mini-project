// 1
const promiseOne = new Promise(function(resolve,reject) {
    //Do an async task 
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Prosime consumed");
})

// 2
new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async task is complete 2 ");
        resolve()
    },1000)
    
}).then(()=>{
    console.log("Prosime consumed 2");
})

// 3
const promiseThree = new Promise((resolve,reject) =>{
      setTimeout(function(){
         resolve({Username: "Palla", email: "Palla2004@gmail.com"})
      },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

// 4
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
          let error = false;
          if(!error){
            resolve({username: "Pallabi", password: "Hello2023"})
          }
          else{
            reject('Error: Somthing Went Wrong')
          }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
     console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Promise is either resolved or rejected"))

// 5

// The async keyword transforms a regular JavaScript function into an asynchronous function, 
//causing it to return a Promise. The await keyword is used inside an async function to pause 
//its execution and wait for a Promise to resolve before continuing.
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
          resolve({username: "Javascript", password: "123"})
        }
        else{
          reject('Error: Somthing Went Wrong')
        }
  },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// fetch()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
        
//     }
// }

// getAllUsers()


//same but another way

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
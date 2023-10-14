// Callbacks:
//Question:- Write a function that takes a callback as an argument and executes it after a specified delay using setTimeout().

// Promises:
// Convert the above function into a new one that returns a promise and resolves after the specified delay.
// Async/Await:
// Use async/await to handle the promise returned by the above function and log the result.

let promise=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("work done")
    }, 3000);
})

async function showData(){
    console.log("exceute before");
    let data=await promise;
    console.log("execute after data will come ");
    console.log(data);
}
showData();

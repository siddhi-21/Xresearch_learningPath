//try catch finally in promise and async /await

function showData(ageNo){
    let age=ageNo;
    return new Promise(function(resolve,reject){
        if(age>18){
            resolve("mature now")
        } 
        else{
            reject("you are in unnder 18 group");
        }
    })
}
showData(20).then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(new Error(data));
});


let promise =new Promise(function(resolve,reject){
    let age=10;
    if(age>18){
       setTimeout(() => {
        resolve("mature now")
       }, 2000);
    } 
    else{
        setTimeout(() => {
            reject("you are in unnder 18 group");
        }, 2000);
    }
})
try {
    

getData();
async function getData(){
    let data =await promise;
    console.log(`the result is ${data}`);
}
} catch (error) {
   console.log("you are in unnder 18 group"); 
}
// Closures:
//Question:-  Write a function that utilizes closure to maintain a private variable. Create a closure and return a function that accesses and modifies the private variable.


function createCounter(){
 let counter=1; 
return {
    increment:function(){
        counter++; //2

    },
    decrement:function(){
        counter--; //1
    },
    getCounter:function(){
        return counter; //1
    },
    setCounter:function(newCounter){
        counter=newCounter;
    }
}
}
  let obj=createCounter(); //object return to variable but lexical  environment of createCounter still their in memorey bcoz its lexical environment is use by another function in their scope
console.log(obj.increment()); // return 2
console.log(obj.decrement());// return 1
console.log(obj.getCounter()); //return 1
console.log(obj.setCounter(300)); //set counter variable to 300
console.log(obj.getCounter()); // return 300

//recursive function:- function calling itself in its own function make recursive function ,if we use recursive function without condition it shows stackOverFlowError.

//Question:-Implement a recursive function calculateFactorial that calculates the factorial of a number.
// Write a higher-order function that takes a function and a parameter, and applies the function multiple times to the parameter.


function calculateFactorial(num:number){
if(num===0||num===1){
    return num;
}
else{
  let factorialOfNumber=num*calculateFactorial(num-1);
  return factorialOfNumber;
}
}
console.log(calculateFactorial(3));//output:- 6

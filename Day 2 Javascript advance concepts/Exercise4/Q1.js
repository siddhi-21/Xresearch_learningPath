// Exercises:
// Array Methods:
//Question:-  Given an array of numbers, use map() to find the square of each
// number and filter() to filter out the ones greater than 10. Log the resulting array.

let arr=[2,4,5,67,8];
let result=arr.map(function(ele){
    return ele*ele; //[4, 16, 25, 4489, 64]
}).filter(function(element){ 
    return element>10;//[16, 25, 4489, 64]
}).reduce(function(acc,currentVal){
  return acc+currentVal //4594
},0)

console.log(result);

result=arr.some(function(ele){
    return ele>6;
});
console.log(result); //true
result=arr.every(function(ele){
    return ele>1;
})
console.log(result);//true

result=arr.find(function(ele){
    return ele>2
});
console.log(result);

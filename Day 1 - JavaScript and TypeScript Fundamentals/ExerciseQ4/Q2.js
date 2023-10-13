// Advanced Array Operations:
//Question:- Create an array of numbers and use map and filter to transform and filter the array, respectively.

let arr=[2,4,6,5,34,5,9];

let result=arr.map(function(ele){
    return (ele*3)
}).filter(function(element){
    return (element%2===0)
})
console.log(result);//output:- [ 6, 12, 18, 102 ]


//question: Implement a function that flattens a nested array structure into a single array.

function flattenNestedArray(nestedArray){
  console.log (nestedArray.flat(Infinity));
}
flattenNestedArray([1,2,[3,4],[23,[4,6],90]]);
// output:- [
//     1, 2, 3,  4,
//    23, 4, 6, 90
//  ]
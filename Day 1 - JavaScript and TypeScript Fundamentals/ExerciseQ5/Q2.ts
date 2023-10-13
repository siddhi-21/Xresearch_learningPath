// TypeScript Generics:
// Question:Implement a generic function that takes an array of any type and returns an array containing only unique elements.
// Test the function with different data types (numbers, strings, objects) to ensure type safety.

function generic<T>(arr: T[]): T[] {
  let array: T[] = [];
  arr.forEach(function(ele) {
    if (array.indexOf(ele) === -1) {
      array.push(ele);
    }
  });

  return array;
}

 console.log( generic([10,2,4,5,4,3]));
 console.log( generic(["a",'b','a','b','c']));





 
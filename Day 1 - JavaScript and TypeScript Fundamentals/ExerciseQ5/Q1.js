// Closure Implementation:
//Question:- Write a function counter that returns a function. The inner function, when invoked, should increment a counter variable in the outer function's scope.
// Demonstrate closure behavior by creating multiple counters and invoking them independently.

function counter(){
    let a=1;
    return function(){
     let b=2
        a++
        return function(){
            let c=3;
            b++;
            return function(){
                console.log(a+b+c);
            }
        }
    }

}
counter()()()();
// question:- Write a function printMultiples that takes a number and prints its multiples from 1 to 10.
function printMultiples(number) {
    for (var i = 1; i <= 10; i++) {
        var multiple = number * i;
        console.log("".concat(number, " x ").concat(i, " = ").concat(multiple));
    }
}
// Example usage:
printMultiples(2);
//output:-
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

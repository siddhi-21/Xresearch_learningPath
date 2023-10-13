//Object Manipulation:
//question:- Create an object representing a book with properties like title, author, and pages.
//Implement a function that takes an array of books and returns a new array sorted by the number of pages.
var books = [
    { title: "Book1", author: "author1", pages: 700 },
    { title: "Book2", author: "author2", pages: 90 },
    { title: "Book3", author: "author3", pages: 1000 },
];
function sortByPages(books) {
    var arr = [];
    arr = books.slice().sort(function (book1, book2) {
        return (book1.pages - book2.pages);
    });
    return arr;
}
console.log(sortByPages(books));
//output:-
// [
//     { title: 'Book2', author: 'author2', pages: 90 },
//     { title: 'Book1', author: 'author1', pages: 700 },
//     { title: 'Book3', author: 'author3', pages: 1000 }
//   ]
function add(val) {
    return val;
}
add(true);
function uniqueElements(inputArray) {
    return Array.from(new Set(inputArray));
}
// Test the function with different data types
var numbers = [1, 2, 2, 3, 4, 4, 5];
var uniqueNumbers = uniqueElements(numbers);
console.log("Unique Numbers:", uniqueNumbers);
var strings = ["apple", "banana", "apple", "cherry"];
var uniqueStrings = uniqueElements(strings);
console.log("Unique Strings:", uniqueStrings);
var objects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" }, // Duplicate
];
var uniqueObjects = uniqueElements(objects);
console.log("Unique Objects:", uniqueObjects);

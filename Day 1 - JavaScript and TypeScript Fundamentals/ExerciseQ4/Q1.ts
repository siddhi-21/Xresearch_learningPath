//Object Manipulation:
//question:- Create an object representing a book with properties like title, author, and pages.
//Implement a function that takes an array of books and returns a new array sorted by the number of pages.

type Book={
    title:string,
    author:string,
    pages:number
}
let books:Book[]=[
    { title: "Book1", author: "author1", pages: 700 },
    { title: "Book2", author: "author2", pages:90 },
    { title: "Book3", author: "author3", pages: 1000 },
]
function sortByPages(books:Book[]) : Book[]{
let arr:Book[]=[];
arr=books.slice().sort(function(book1,book2){
    return (book1.pages-book2.pages)
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

function add<Type>(val:Type):Type{
    return val
}

add(true)



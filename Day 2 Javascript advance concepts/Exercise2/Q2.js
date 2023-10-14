// Scopes:

//Question:-  Write code snippets demonstrating block scope, function scope, and lexical scope. Explain the output of each snippet.

//block scope
//block scope is nothing but {} scope in that curly braces
//funtion's scope
//Variables declared within a function are accessible only within that function.
let a=20;//global variable
function block(){
    let a=10; //local variable 
    let b=30;
    console.log(a);//10
}
block()
console.log(a);//20
console.log(b);//gives error bcoz b in block() function scope

//Lexical Scope:
//lexical scope is nothing but a scope of variable and their accesiability .lexical means where physically variable present in function
function parent()
{
    let a=20; 
    function innerFun(){
        let b=30;
        console.log(a,b);//we can acces variable from top to bottom so innerFun() present in parent() fun so innerFun() can acces variable of parent() function 
    }
    innerFun()
}
parent();


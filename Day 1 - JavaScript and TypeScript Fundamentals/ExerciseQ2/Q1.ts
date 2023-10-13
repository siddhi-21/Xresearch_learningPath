// question:- Declare a variable fullName using let and concatenate it with another string to form a sentence.
// Use template literals to create a dynamic message using variables.

let fullName:string="jhon deo"
console.log(`Hello ${fullName}`);
//output:- Hello jhon deo





//data types in ts


let value:number=123_234_345 //we can store larger number with underscore in ts
let Name="ram"; //we can store value of variable without data type so .ts compiler autpmatically detact the type of variable and set to them
let isLIve:boolean=true;
let level;//by default data type when declaring variable is "any"
level=2;
level="a";//but by doing this we loose major benifits of using Ts 

//arrays in ts
let arr=[];//make data type to any[];
//number array 
let val:number[]=[1,2,4,5,];
let stringArray:string[]=["s","d"];//string 
let booleanArray=[true,false];//boolean


//tuple in Ts
const tuple:[string,number]=["abc",90] ;//type of the first element will be string and second one number
// tuple.push(2);  we can push new ele in tuple array but it crash tuple bcos we only set two data types to two ele . so use tuple only if we want to store 2 ele 
// console.log(tuple);

//enum in Ts
//enum use to creat named constant and values are read only
const enum Color{
    red='red',
    green=1,

}

console.log(Color.red)


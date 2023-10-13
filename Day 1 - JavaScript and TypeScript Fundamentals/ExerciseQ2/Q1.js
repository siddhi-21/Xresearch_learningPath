var fullName = "jhon deo";
console.log("Hello ".concat(fullName));
//data types in ts
var value = 123234345; //we can store larger number with underscore in ts
var Name = "ram"; //we can store value of variable without data type so .ts compiler autpmatically detact the type of variable and set to them
var isLIve = true;
var level; //by default data type when declaring variable is "any"
level = 2;
level = "a"; //but by doing this we loose major benifits of using Ts 
//arrays in ts
var arr = []; //make data type to any[];
//number array 
var val = [1, 2, 4, 5,];
var stringArray = ["s", "d"]; //string 
var booleanArray = [true, false]; //boolean
//tuple in Ts
var tuple = ["abc", 90]; //type of the first element will be string and second one number
console.log("red" /* Color.red */);

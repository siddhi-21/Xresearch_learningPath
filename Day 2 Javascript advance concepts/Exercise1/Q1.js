// Prototypes:
//Question:- Use Object.create() to create a new object with a specified prototype. Log its properties and prototype chain using __proto__.

const person={
    name:'john',
    age:30,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.age}`);
      },
}

const person1=Object.create(person);
person1.isAlive=true ;
person1.name="lisa";//overwrite the property of person object
person1.age=40;
person1.printIntroduction();
console.log(person1)
console.log(person1.__proto__); //gives person object because person1 inherited properties from person
console.log(person1.__proto__.__proto__); //gives properties of Object 
console.log(person1.__proto__.__proto__ ===Object.prototype); //ans is true

//everything in js is object


// Prototype Methods:
//Question2:- Use Object.getPrototypeOf() to get the prototype of an object and log it to the console.

let parentObject={
  name:"lisa",
  location:'london',
  isAlive:true,
  position:'mother'
}
let mocha=Object.create(parentObject);
mocha.name="mocha";
mocha.location='India';
mocha.position='son';
mocha.talk=function(){
  console.log("talking");
}

console.log(Object.getPrototypeOf(mocha)); //givs parentObject 
console.log(Object.getPrototypeOf(mocha)===parentObject); //true
// Classes:
//Question:- Create a class for a "Car" with properties like "make," "model," "year," and methods like "start," "stop."

// Inheritance:
//Question:- Create a class "ElectricCar" that extends "Car" and adds new properties/methods like "batteryLevel," "charge."

class car{
    //private variable
    #modelNo=1234;
    constructor(model,year,make){
        this.model=model;
        this.year=year;
        this.make=make;

    }
    static greet(){
        console.log("hello sir");
    }

    get modelNo(){
        return this.#modelNo
    }
    set modelNo(no){
        this.modelNo=no;
    }
    get modelName(){
        return `${this.model}`
    }
    set modelName(name){
        this.model=name;
    }
    start(){
        console.log("car started");
    }
    stop(){
        console.log('car stopped');
    }
}

let car1=new car("BMW",1999,"owner");
console.log(car1.modelName);//BMW
car1.modelName="ola";
//static method
car.greet();//hello sir
console.log(car1.modelNo);//1234

class ElectricCar extends car{
    constructor(model,year,make,name,battery, batterLife){
        super(model,year,make);
        this.name=name;
        this.batterLife=batterLife;
        this.battery=battery;
    }
    showBatterLife(){
        console.log(this.batterLife);
    }
}
let e1=new ElectricCar("ola",2022,"ola","ev",120,"4hrs");
e1.showBatterLife();//4hrs
console.log(e1.modelNo);//1234
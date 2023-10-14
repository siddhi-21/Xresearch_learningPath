// Exercises:
// Modules:
// Create two separate JavaScript files, one exporting functions/variables using ES14 module syntax and the other importing and using them. Ensure proper handling of default and named exports.

class propertyDetails{
    constructor(propertyName,propertyId,propertySize){
        this.propertyName=propertyName;
        this.propertyId=propertyId;
        this.propertySize=propertySize;
    }
    get propertyInfo(){
        return `Property Name: ${this.propertyName}, Property Id:${this.propertyId}, Size of the property is :${this.propertySize}`;
    }
    get propertyNames(){
        return this.propertyName;
    }
    set propertyNames(name){
       this.propertyName=name
    }
    }
    let p1=new propertyDetails("home",2,'320sqrt');
    export default p1;
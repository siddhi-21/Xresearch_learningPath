type Employee={
    name:string,
    userType:string ,
    discout:number
}

let user1:Employee={
   name:"jhon",
   userType:"regular",
   discout:0.1
}
let user2:Employee={
    name:"mosh",
    userType:"premium",
    discout:0.2
 }

function calculatePrice(basePrice:number,user:any):void{
if(user.userType=="premium"){
    let discout:number= basePrice *(1 -user.discout);
    console.log(discout);
    
}
else{
    let discout:number= basePrice * (1 - user.discout);
    console.log(discout);
}
}
let basePrice:number=100;
calculatePrice(basePrice,user2)
//output:- 80 after 20% discount
calculatePrice(basePrice,user1)
//output:- 90 after 10% discount
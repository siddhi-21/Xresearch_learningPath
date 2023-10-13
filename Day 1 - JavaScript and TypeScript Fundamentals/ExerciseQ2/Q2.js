var user1 = {
    name: "jhon",
    userType: "regular",
    discout: 0.1
};
var user2 = {
    name: "mosh",
    userType: "premium",
    discout: 0.2
};
function calculatePrice(basePrice, user) {
    if (user.userType == "premium") {
        var discout = basePrice * (1 - user.discout);
        console.log(discout);
    }
    else {
        var discout = basePrice * (1 - user.discout);
        console.log(discout);
    }
}
var basePrice = 100;
calculatePrice(basePrice, user2);
//output:- 80 after 20% discount
calculatePrice(basePrice, user1);
//output:- 90 after 10% discount

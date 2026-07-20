//Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

let discount = 0;
let totalCart = 999;
let isMember = false;
let totalPayable = 0;

if( totalCart > 1000 ){
    if( isMember ){
        discount = totalCart * (20 / 100);
        totalPayable = totalCart - discount;
    } 
    else{
       discount = totalCart * (10 / 100);
        totalPayable = totalCart - discount;
    }
console.log("Coustomer Payable:", +totalPayable);
} 

else{
    discount = totalCart * (0 / 100);
    totalPayable = totalCart - discount;
    console.log("Coustomer Payable(no discount):", +totalPayable);
}
let cost1=500;
let cost2=300;
let total=cost1+cost2;
let dis=total*0.1;
let finalAmount=total-dis;
let freeShipping=finalAmount>500?finalAmount:finalAmount+10;
console.log("Total Cost: "+freeShipping);

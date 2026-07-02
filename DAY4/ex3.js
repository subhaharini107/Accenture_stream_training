let cart=[
    {name: "laptop",price:1000,quantity:1},
    {name: "mobile",price:500,quantity:2},
    {name: "tablet",price:300,quantity:3}   
]

let totatAmount=cart.reduce((total,item)=>{
       return total+(item.price)*item.quantity;
},0)
console.log(totatAmount);
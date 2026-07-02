let dayToCalculate=new Date("2026-07-10");
let today=new Date();
let diff=dayToCalculate-today;
let days=Math.floor(diff/(1000*60*60*24));
console.log(days);
let arr=[1,2,3,4,5];
console.log(arr);
let mapArr=arr.map(function(item){
    return item*2;
})
console.log("Map: ",mapArr);
let filterArr=arr.filter(function(item){
    return item%2==0;
})
console.log("Filter: ",filterArr);
let reduceArr=arr.reduce(function(fib,item){
    return fib*item;
},1);
console.log("Reduce: ",reduceArr);
let someArr=arr.some(function(item){
    return item==3;
})
console.log("Some: ",someArr);
let everyArr=arr.every(function(item){
    return item>6;
})
console.log("Every: ",everyArr);
let findArr=arr.find(function(item){
    return item==5;
})
console.log("Find: ",findArr);
let indexArr=arr.findIndex(function(item){
    return item==4;
})
console.log("Find Index: ",indexArr);



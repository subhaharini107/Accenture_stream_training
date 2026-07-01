let toDoList=["Bruh","Take a shower","Eat"];
console.log(toDoList)
toDoList.push("Training");
console.log(toDoList)
toDoList.unshift("Wake up");
console.log(toDoList)
toDoList=toDoList.filter((item) => item!== "Bruh");
console.log(toDoList)
let pending=["practice","sleep"];
console.log(pending)
toDoList=toDoList.concat(pending);
console.log(toDoList)
toDoList.sort();
console.log(toDoList)
result=toDoList.join(",");
console.log(result)
var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop();
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

fruit.shift();
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

var index = fruit.indexOf("orange");
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

fruit.push(index);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

console.log(vegetables.length);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

vegetables.push(vegetables.length);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  

var food = fruit.concat(vegetables);
console.log("food: ", food);


food.splice(4, 2);
console.log("food: ", food);
  

food.reverse();
console.log("food: ", food);


food.toString();
console.log("food: ", food);


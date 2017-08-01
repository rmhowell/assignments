var readline = require("readline-sync");
var num1 = parseInt(readline.question('Enter your first number '));
var num2 = parseInt(readline.question('Enter your second number '));
var operation = readline.question("Enter the operation to perform: add, sub, mul, div ")

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

//if (operation === "add") {
//    console.log("The result is: " + add(num1, num2));
//} else if (operation === "sub") {
//    console.log("The result is: " + sub(num1, num2));
//} else if (operation === "mul") {
//    console.log("The result is: " + mul(num1, num2));
//} else if (operation === "div") {
//    console.log("The result is: " + div(num1, num2));
//} else {
//    console.log("Enter a valid operation")
//}
//     

switch (operation) {
    case "add":
        result = add(num1, num2);
        break;
    case "sub":
        result = sub(num1, num2);
        break;
    case "mul":
        result = mul(num1, num2);
        break;
    case "div":
        result = div(num1, num2);
        break;
    default:
        console.log("Enter a valid operation");

}

console.log("The result is: " + result);
var readline = require("readline-sync");
console.log('Hello! My name is Rachel. Help me get to know you!\n');

var firstName = readline.question('What is your first name? ');
var lastName = readline.question("What is your last name?");
console.log("Nice to meet you, " + firstName.toUpperCase() + " " + lastName.toUpperCase());

var age = readline.question("How old are you?");
if(parseInt(age) > 30) {
    console.log(age + "???");
    console.log("You don't look a day over 20!");
} else {
    console.log(age + "! You're so young!")
}

var bio = readline.question("Tell me more about yourself.")
if (bio.length > 20) {
    var halfLength = bio.length / 2
    console.log("The info you gave me was " + bio.length + " long. Here's what I remember. " + bio.slice(0, halfLength));
}

var returnMessage = readline.question("Would you like me to start from somewhere else? Choose a number from the range [0-" + bio.length + "]")
console.log(bio.slice(parseInt(returnMessage), bio.length))
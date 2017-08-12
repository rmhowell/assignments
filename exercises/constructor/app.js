//3 inputs on html package
//------js-------
//save inputs to 3 variables
//create constructor that thakes those same 3 variables as params
//instantiate constructor
//print new object to the DOM


var userInput = document.getElementById(name).value;
var userInput2 = document.getElementById(age).value;
var userInput3 = document.getElementById(occupation).value;

function person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

var User = new person("userInput", "userInput2", "userInput3");

function userInfo() {
    document.getElementsById("btn1").addEventListener("click", function () {
        document.getElementById("return").innerHTML = User;
    });
}

console.log(User)

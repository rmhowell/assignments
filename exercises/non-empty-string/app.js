//Given a non-empty string like "Code" return a string like "CCoCodCode".

function stringFunction(str) {
    var resultStr = "";
    for (var i = 0; i <= str.length; i++) {
        resultStr += str.slice(0, i);
    }
    return resultStr;
}

console.log(stringFunction("Code"));
function print(str) {
    var arr = str.split("");
    for (var i = 0; i <= str.length; i++) {
        console.log(str[i]);
    }
}

print("RACHEL");


function position(str, a) {
    var arr = str.split("");
    for (var i = 0; i <= str.length; i++) {
        if (arr[i] === a) {
          return "a" + " is position " + (i+1) + " of " + str;} 
        if (i === str.length && i !== "a") {
          return "a" + " is not found in " + str;
        }
    }
}

console.log(position("rachel", "a"));
console.log(position("rachel", "b"));


function arr42(arr) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === 42) {
      break;
    }
    if (arr[i] !== 42 && i === arr.length) {
      return 42 + " not found";
    }
  }
}

console.log(arr42([63,858,42,64]));
console.log(arr42([1,2,3,4,5,6]));


var smallest = Infinity;
function smallestNum(arr) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] < smallest) {
    smallest = arr[i];
    } 
  }
  return smallest + " is the smallest number";
}

console.log(smallestNum([1,2,3,4,5,6,7,8,9,10]));



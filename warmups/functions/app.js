function sum(a, b) {
  return (a + b);
}

console.log(sum(1, 3));

var big = 0;
var biggest = 0;
function greatestNum(a, b, c) {
  if (a > b) {
    big = a;
  } else {
      big = b;
    }
  if (big > c) {
    biggest = big;
  }  else {
      biggest = c;
    }
  return biggest;
  }
  
console.log(greatestNum(1, 2, 3));

function evenOdd(a) {
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOdd(4));
console.log(evenOdd(5));

function str20(str) {
  if (str.length <= 20) {
    return str + str;
  } else {
    var halfLength = (str.length / 2);
    return str.substring(0, halfLength);
  }
}

console.log(str20("hello"));
console.log(str20("abcdefghijklmnopqrstuvwxyz"));

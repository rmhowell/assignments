function countCode(string) {
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    if(string[i] + string[i + 1] === "co"   && string[i + 3] === "e") {
      total ++;
    }
  }
  return total;
}


console.log(countCode("aaacodebbb")); 
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));
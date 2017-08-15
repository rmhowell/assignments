let testStr = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."

let repeatWord = function(str) {
    let arr = str.split(" ");
    let newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            newArr.push(arr[i]);
            i++
        } 
    }
    return newArr;
}

console.log(repeatWord(testStr));

module.exports = repeatWord;
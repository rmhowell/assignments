let substrCombo = function(str) {
    let result = [];
    for (let i = 0, j = 1; i < str.length; i++, j++) {
        for (let j = str.length; j > i; j--) {
            let newSubStr = str.substring(i, j);
            result.push(newSubStr);
        }
    }
    
    return result;
}

console.log(substrCombo("abcd"))

module.exports = substrCombo;
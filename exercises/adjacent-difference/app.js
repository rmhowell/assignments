let adjacentString = function(array) {
    let results = ["", "", ""];
    
    for(let i = 0; i < array.length; i++) {
        if(array[i + 2] === undefined) {
            return results;
        } else if((array[i].length + array[i + 1].length + array[i + 2].length) > (results[0].length + results[1].length + results[2].length)) {
            results = [array[i], array[i+1], array[i+2]]
        }
    }
    
    return results;
}

console.log(adjacentString(["this", "is", "an", "array"]))

module.exports = adjacentString;
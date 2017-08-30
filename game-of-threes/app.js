let gameOfThrees = function(num) {
    let count = 0;
    while (num > 0) {
        if(num === 1) return count;
        else if((num + 1) % 3 === 0) {
            num ++; 
        } else if((num - 1) % 3 === 0) {
            num --; 
        }
        while ((num / 3) >= 1) {
            count++;
            num = num / 3;
        }
    }
};

console.log(gameOfThrees(11));

module.exports = gameOfThrees;
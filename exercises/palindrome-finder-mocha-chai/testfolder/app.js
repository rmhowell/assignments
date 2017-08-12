function isPalindrome(str) {
    str = str.replace(/\W/g, "")
    var reverseStr = str.split('').reverse().join('');
    return str.toLowerCase === reverseStr.toLowerCase
}

isPalindrome("tacocat");

module.exports = {
    isPalindrome
}
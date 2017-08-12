var chai = require("chai");
var assert = chai.assert;

var isPalindrome = require("./app.js").isPalindrome;

describe("Palindrome checking function", function () {
    it("should be the same forwards and backwards", function () {
        isPalindrome("RaCe! CAr");
        assert.equal(isPalindrome("RaCe! CAr"), true);
    });
});

var chai = require("chai");
var assert = chai.assert;

var isPalindrome = require("../testfolder/app.js").isPalindrome;

describe("Palindrom checking function", function () {
    it("should be the same forwards and backwards", function () {
        isPalindrome("RaCe! CAr");
        assert.equal(isPalindrome("RaCe! CAr"), true);
    });
});

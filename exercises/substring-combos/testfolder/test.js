const chai = require("chai");
const assert = chai.assert;
const substrCombo = require("../app.js");

let tests = {
    first: "abcd"
}

describe("substring combo function", ()=>{
    it("should return each substring", ()=>{
        assert.includeMembers(substrCombo(tests.first), ["a","ab","abc","abcd", "b","bc","bcd", "c","cd", "d"])
    })
})
const chai = require("chai");
const assert = chai.assert;
const gameOfThrees = require("../app.js")

let tests = {
    case1: 1,
    case2: 3,
    case3: 21,
}

describe("game of threes function", ()=> {
    it("should return a number", ()=> {
        assert.equal(gameOfThrees(tests.case1), 0)
    })
    it("should return a number", ()=> {
        assert.equal(gameOfThrees(tests.case2), 1)
    })
    it("should return a number", ()=> {
        assert.equal(gameOfThrees(tests.case3), 3)
    })
})
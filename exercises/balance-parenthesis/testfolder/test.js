const chai = require("chai");
const assert = chai.assert;
const parenBal = require("../app");

let tests = {
    balanced: "()()()()",
    unbalanced: "()))))",
    wrongOrder: ")()()("
}

describe("Parenthesis balance function", ()=>{
    it("should return true", ()=>{
        assert.equal(parenBal(tests.balanced), true)
    })
    it("should return false", ()=>{
        assert.equal(parenBal(tests.unbalanced), false)
    })
    it("should return false", ()=>{
        assert.equal(parenBal(tests.wrongOrder), false)
    })
})
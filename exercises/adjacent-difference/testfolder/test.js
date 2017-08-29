const chai = require("chai");
const assert = chai.assert;
const adjacentString = require("../app.js");

let tests = {
    case1: ["this", "is", "an", "array"]
}

describe("adjacent difference function", () => {
    it("should return ", () => {
        assert.deepEqual(adjacentString(tests.case1), ["is", "an", "array"])
    })
})
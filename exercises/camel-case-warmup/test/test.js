const camelCase = require("../app.js");
const chai = require("chai");
const assert = chai.assert;

let tests = {
    spaces: "test example",
    hyphens: "test-example",
    underscores: "test_example",
    multiple:"test_mctest-test"
}

describe("camel case exercise", ()=>{
    it("should return string with camelCase (spaces)", ()=>{
        assert.equal(camelCase(tests.spaces), "testExample")
    });
    it("should return string with camelCase (hyphens)", ()=>{
        assert.equal(camelCase(tests.hyphens), "testExample")
    });
    it("should return string with camelCase (underscores)", ()=>{
        assert.equal(camelCase(tests.underscores), "testExample")
    });
    it("should return string with camelCase (multiple)", ()=>{
        assert.equal(camelCase(tests.multiple), "testMctestTest")
    });
})

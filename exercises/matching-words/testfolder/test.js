const repeatWord = require("../app.js");
const chai = require("chai");
const assert = chai.assert;

let tests = {
    noRepeat: "no repeat",
    repeat: "repeat repeat",
    mix: "repeat repeat mix no no repeat"
    
}

describe("matching words function", ()=>{
    it("should return empty array", ()=>{
        assert.deepEqual(repeatWord(tests.noRepeat), []);
    });
    it("should return one of the repeated words in an array", ()=>{
        assert.deepEqual(repeatWord(tests.repeat), ["repeat"]);
    });
    it("should return an array with 2 items", ()=>{
        assert.deepEqual(repeatWord(tests.mix), ["repeat", "no"])
    })
});

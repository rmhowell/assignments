var assert = chai.assert;

describe("number", function(){
    it("should be greater than 10", function() {
        var num = 11;
        
        assert.isAbove(num, 10);
    });
    it("should be even", function() {
        var num = 12;
        var evenOdd
        if (num % 2 === 0) {
            evenOdd = true;
        }
        
        assert.isTrue(evenOdd, num + " is even")
    })
})
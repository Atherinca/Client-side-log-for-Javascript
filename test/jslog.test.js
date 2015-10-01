/**
 * Created by alexandre on 30/09/15.
 */

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("Testing script load", function(){
    it("Must be true", function () {
        expect(onerror).toBe(null);
    })
});
// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("Should return false if the shift amount is 0.", () => {
      const zero = caesar("Thinkful", 0);
      expect(zero).to.be.false;
    });
    it("Should return false if the shift amount is above 25.", () => {
      const above = caesar("Thinkful", 26);
      expect(above).to.be.false;
    });
    it("Should return false if the shift amount is less than -25", () => {
      const below = caesar("Thinkful", -35);
      expect(below).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("Should encode a message by shifting the letters", () => {
      const expected = "phvvdjh";
      const actual = caesar("message", 3);
      expect(actual).to.equal(expected);
    });
    it("Should leave spaces and other symbols as is.", () => {
      const expected = "d phvvdjh.";
      const actual = caesar("a message.", 3);
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters", () => {
      const expected = "d phvvdjh";
      const actual = caesar("A MessAGe", 3);
      expect(actual).to.equal(expected);
    });
    it("Should appropriately handle letters at the end of the alphabet.", () => {
      const expected = "cheud pdjdclqh";
      const actual = caesar("zebra magazine", 3);
      expect(actual).to.equal(expected);
    });
    it("Should allow for a negative shift that will shift to the left.", () => {
      const expected = "wbyox jxdxwfkb";
      const actual = caesar("zebra magazine", -3);
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("Should decode a message by shifting the letters in the opposite direction.", () => {
      const expected = "phvvdjh";
      const actual = caesar("message", -3, false);
      expect(actual).to.equal(expected);
    });
    it("Should leaves spaces and other symbols as is.", () => {
      const expected = "a message.";
      const actual = caesar("d phvvdjh.", 3, false);
      expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters.", () => {
      const expected = "a message";
      const actual = caesar("d pHvvdjh", 3, false);
      expect(actual).to.equal(expected);
    });
    it("Should appropriately handle letters at the end of the alphabet.", () => {
      const expected = "zebra magazine";
      const actual = caesar("cheud pdjdclqh", 3, false);
      expect(actual).to.equal(expected);
    });
    it("Should allow for a negative shift that will shift to the left.", () => {
      const expected = "cheud pdjdclqh";
      const actual = caesar("zebra magazine", -3, false);
      expect(actual).to.equal(expected);
    });
  });
});

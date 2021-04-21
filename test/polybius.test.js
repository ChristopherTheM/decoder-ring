// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("Should encode a message by translating each letter to number pairs.", () => {
      const expected = "23513434112251";
      const actual = polybius("message");
      expect(actual).to.equal(expected);
    });
    it("Should translate both 'i' and 'j' to 42.", () => {
      const expected = "424222221351";
      const actual = polybius("jiggle");
      expect(actual).to.equal(expected);
    });
    it("Should leave spaces as is.", () => {
      const expected = "2345 23513434112251";
      const actual = polybius("my message");
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("Should decode a message by translating each pair of numbers into a letter.", () => {
      const expected = "message";
      const actual = polybius("23513434112251", false);
      expect(actual).to.equal(expected);
    });
    it("Should translate 42 to both 'i' and 'j'", () => {
      const expected = "(i/j)(i/j)ggle";
      const actual = polybius("424222221351", false);
      expect(actual).to.equal(expected);
    });
    it("Should leave spaces as is.", () => {
      const expected = "my message";
      const actual = polybius("2345 23513434112251", false);
      expect(actual).to.equal(expected);
    });
    it("Should return false if the length of all numbers is odd.", () => {
      const actual = polybius("1112131425262", false);
      expect(actual).to.be.false;
    });
  });
});

// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("Should return false if the substitution alphabet is missing.", () => {
      const actual = substitution("message");
      expect(actual).to.equal(false);
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(false);
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "alskdjfhgalskdjfhgalskdjf";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(false);
    });
  });
  describe("encoding a message", () => {
    it("Should encode a message by using the given substitution alphabet.", () => {
      const expected = "ykrrpik";
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      expect(actual).to.equal(expected);
    });
    it("Should work with any kind of key with unique characters.", () => {
      const expected = "ysii.rs";
      const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
    it("Should preserve spaces.", () => {
      const expected = "yp ysii.rs";
      const actual = substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("Should decode a message by using the given substitution alphabet.", () => {
      const expected = "message";
      const actual = substitution(
        "ykrrpik",
        "pqwokgiutsalyedjfhrmznxbcv",
        false
      );
      expect(actual).to.equal(expected);
    });
    it("Should work with any kind of key with unique characters.", () => {
      const expected = "message";
      const actual = substitution(
        "ysii.rs",
        ".waeszrdxtfcygvuhbijnokmpl",
        false
      );
      expect(actual).to.equal(expected);
    });
    it("Should preserve spaces", () => {
      const expected = "my message";
      const actual = substitution(
        "yp ysii.rs",
        ".waeszrdxtfcygvuhbijnokmpl",
        false
      );
      expect(actual).to.equal(expected);
    });
  });
});

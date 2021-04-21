// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result = "";
    let newIndex = 0;
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    for (let characters in input) {
      character = input[characters];
      if (alphabet.indexOf(character) === -1) {
        result += character;
        continue;
      }
      alphabet.find((letter) => {
        if (letter === character) {
          encode
            ? (newIndex = alphabet.indexOf(letter) + shift)
            : (newIndex = alphabet.indexOf(letter) - shift);
          if (newIndex >= 26) {
            newIndex -= 26;
          } else if (newIndex <= -1) {
            newIndex += 26;
          }
          result += alphabet[newIndex];
        }
      });
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    let result = "";

    const checkAlphabet = [];
    for (letters in alphabet) {
      checkAlphabet.push(alphabet[letters]);
    }
    let alphabetHasDuplicate = checkAlphabet.some(
      (letter, arrayBank) => checkAlphabet.indexOf(letter) !== arrayBank
    );
    // If the alphabet parameter has duplicate values, return false

    if (alphabetHasDuplicate) {
      return false;
    }
    // For each character in the input
    for (characters in input) {
      const character = input[characters];
      const codeValue = alphabet.indexOf(character);
      const trueValue = trueAlphabet.indexOf(character);
      // If the character is a non-letter, return the character
      if (alphabet.indexOf(character) === -1) {
        result += character;
        continue;
      }
      // If the character is being encoded, submit the decoded alphabet's letter for the same index of true alphabet, otherwise submit the true alphabet's letter for the same index of the encrypted alphabet
      result += encode ? alphabet[trueValue] : trueAlphabet[codeValue];
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

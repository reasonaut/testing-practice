const caesarCipher = (string, key) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const result = string.split("").map((element, index, array) => {
    if (!lowerAlphabet.includes(element) && !upperAlphabet.includes(element))
      return element;
    const alphabet =
      element === element.toUpperCase() ? upperAlphabet : lowerAlphabet;
    const originalCharIndex = alphabet.indexOf(element);
    const encodedLetter = alphabet[(originalCharIndex + key) % 26];
    return encodedLetter;
  });
  return result.join("");
};

module.exports = caesarCipher;

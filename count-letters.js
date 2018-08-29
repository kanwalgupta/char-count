function countLetters(input) {
  var countedLetters = {};
  var noSpaces = input.split(" ").join("");
  console.log(noSpaces);
  for (var i = 0; i < noSpaces.length; i ++) {
    var count = 0;
    for (var j = 0; j < noSpaces.length; j ++) {
      if (noSpaces[i] === noSpaces[j]) {
        count ++;
      }

    }
    countedLetters[noSpaces[i].toString()] = count;
  }
  return countedLetters;
}
console.log(countLetters('lighthouse in the house'));
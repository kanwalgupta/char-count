function countIndices(input){
   var countedLetters = {};
   var noSpaces = input.split(" ").join("");
   for (var i = 0; i < noSpaces.length; i ++) {
    if(countedLetters.hasOwnProperty(noSpaces[i].toString())){
        countedLetters[noSpaces[i].toString()].push(i);
    }
       else{
           countedLetters[noSpaces[i].toString()] = [];
           countedLetters[noSpaces[i].toString()].push(i);
       }
   }
   return countedLetters;

}

console.log(countIndices('lighthouse in the house'));
function squareOfWordLength(word) {
  var wordLength = word.length;
  var lengthSqure = wordLength * wordLength;
  console.log(
    `Length of word "${word}": ${wordLength},  \nIt's square is: ${lengthSqure}\n `
  );
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`---------------------------------------------\n`);
var string = function () {
  var str = "I am Angular Developer";
  console.log(`"Given String is": ${str}\n`);
  var strLength = str.length;
  console.log(`"Length of given string is": ${strLength}\n`);
  var splitStr = str.split(" ");
  var wordStrLength = splitStr.length;
  console.log(`"Total Words in given string are": ${wordStrLength}\n`);
  var devideStr = strLength / wordStrLength;
  console.log(`"deviding length by total words": ${devideStr}\n`);
  var multString = strLength * wordStrLength;
  console.log(`"multiplying string length with total words": ${multString}`);
};
string();

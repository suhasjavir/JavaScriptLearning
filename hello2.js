console.log(`==3.1==`);
var quote = "Hard work always pays back";
console.log("Hard work always pays back");
var stringConcate = "";
var splitString = quote.split(" ").join("");
console.log(splitString);
for (let index = 0; index < quote.length; index++) {
  if (index % 2 !== 0) {
    var oddPositionedChars = splitString.charAt(index);
    stringConcate += oddPositionedChars;
    }
}
console.log(`Odd positioned characters in given string are: ${stringConcate}`);
// console.log(`==3.1==`);
// var quote = "Hard work always pays back";
// var stringConcate = "";
// var splitString = quote.split("").join("");
// for (let index = 0; index < quote.length; index++) {
//   if (index % 2 == 0) {
//     var oddPositionedChars = quote.charAt(index);
//     stringConcate += oddPositionedChars;
//   }
// }
// console.log("Hard work always pays back");
// console.log(`Odd positioned characters in given string are: ${stringConcate}`);

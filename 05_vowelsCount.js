//  vowels print
var sentence = "Yes just do it man, I know you can";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charCopy = char.toLowerCase();
  if (
    charCopy == `a` ||
    charCopy == `e` ||
    charCopy == `i` ||
    charCopy == `o` ||
    charCopy == `u`
  ) {
    console.log(`vowel characters ${char}`);
    counter = counter + 1;
  }
}
console.log(`total count ${counter}`);
// to print the given string in reverse order.
console.log(`Print the string in revese order`);
var sentence = "Yes just do it man, I know you can";
var reverseString = "";
var lastCharPosition = sentence.length - 1;
for (let index = lastCharPosition; index >= 0; index--) {
  var char = sentence.charAt(index);
  reverseString = reverseString.concat(char);
  console.log(char);
}
console.log(reverseString);
// to print the number 5, 1000 times.
var counter = 1;
while (counter <= 1000) {
  console.log(5);
  counter = counter + 1;
}

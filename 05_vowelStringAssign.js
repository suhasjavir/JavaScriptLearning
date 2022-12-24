let strTotal = function (str) {
  console.log(`given string is: "${str}"`);
  let counter = 0;
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    let charCopy = char.toLowerCase();
    if (
      charCopy == "a" ||
      charCopy == "e" ||
      charCopy == "i" ||
      charCopy == "o" ||
      charCopy == "u"
    ) {
      counter = counter + 1;
    }
  }
  return counter;
};
let strCount = strTotal("I am very good IT Developer");
console.log(`total no of vowels in this string: ${strCount}`);
console.log(`\n----------------------------------------------------\n`);
console.log(
  `2) write a function to get the sum of cube of numbers form 1 to 5.`
);
function sumOfCube() {
  let cube = 0;
  for (let index = 1; index <= 5; index++) {
    cube += index * index * index;
  }
  console.log(`The sum of cube of numbers form 1 to 5 is: ${cube}`);
}
sumOfCube();
console.log(`\n----------------------------------------------------`);
console.log(`3)`);
function oddPositionedChars(nameOfString) {
  console.log(`Given string is: ${nameOfString}`);
  var stringConcate = "";
  var splitString = nameOfString.split(" ").join("");
  for (let index = 1; index < splitString.length; index = index + 2) {
    var char = splitString.charAt(index);
    stringConcate += char;
  }
  console.log(`Odd positioned characters:${stringConcate}\n`);
}
oddPositionedChars(`Hard work always pays back`);
oddPositionedChars(`Soon I will be Angular IT Champ`);

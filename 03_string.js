console.log(
  "--------------------------------------------------------------------------"
);
var square = function (num) {
  console.log("Square of", num, "is", num * num);
};
square(5);
square(6);
square(25);
square(100);
console.log("typeof function square is:", typeof square);
console.log(
  "--------------------------------------------------------------------------"
);
var area = function (num1, num2) {
  var recta = num1 * num2;
  return recta;
};
var recta = area(499, 917);
console.log("Area of rectanagle is:", recta);
console.log(
  "--------------------------------------------------------------------------"
);
var swapValues = function (val1, val2) {
  console.log("Values Before Swap:", val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("Values After Swap:", val1, val2);
};
swapValues("virat", "Anushka");
console.log(" ");
swapValues(1000, 2000);
console.log(
  "--------------------------------------------------------------------------"
);
var javaScript = "JS is the most popular language";
console.log("Given Sring is:", javaScript);
console.log("Total character in the string is:", javaScript.length);
console.log("Character at index 6 is:", javaScript.charAt(6));
console.log("Character at index 11 is:", javaScript.charAt(11));
var totalChar = javaScript.length;
console.log(
  "Character at the last index is:",
  javaScript.charAt(totalChar - 1)
);
console.log("First character in the given string is:", javaScript.charAt(0));
console.log(
  "Length of the string is:",
  javaScript.length,
  "&",
  "Square of the total charcter length is:",
  totalChar * totalChar
);
console.log(
  "--------------------------------------------------------------------------"
);

console.log(`\nReverse string program:\n`);

let str = 'santosh';
let revStr = '';
let lastChar = str.length-1;
console.log(lastChar);
// console.log(str.charAt(6));
for(let index = lastChar; index >= 0; index--){
  let char = str.charAt(index);
  revStr = revStr.concat(char);
}
console.log(revStr);





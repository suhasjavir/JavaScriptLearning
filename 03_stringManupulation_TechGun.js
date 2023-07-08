let str = "Suhas";
let greet = `Hi, "${str}"` // template literal. (Es6) 
console.log(greet);
let str1 = "Suhas \n Javir"; // \n for next line.
console.log(str1);

let str2 = "Suhas \" Javir"; // with the help of \", " appears in the output.
console.log(str2);

let str3 = "Suhas Javir";
console.log("Find the total length of the string:-", str3.length);  // .length is used to find the length of string. It will return no. of character.

let str4 = "Suhas Javir";
console.log("Find the perticular character from string:-", str4[3]); // to find perticular character from the string, and it will starts counting from "0".

let str5 = "Suhas";
let str6 = "Javir";
console.log("String Concat:-", str5.concat(" ", str6)); // concatinating two strings using concat method.
console.log(" ");
console.log("String Concat:-", str5 + " " + str6); // concatinating two strings using + operator.

let str7 = "This is Javascript Tutorial, It is good tutorial."
// .substr() is depricated. it's not working.
console.log("Substring:-", str7.substring(8, 27)); // to find the substring from the string we use substring.
// no 8 is defines position and 19 is defines how much length is calculated.

let str8 = "This is Javascript Tutorial, It is a good tutorial.";
console.log("Starting position of good:-", str8.indexOf("good"));
console.log("Starting position of Third is:-", str8.indexOf("is", 10)); 
// because of this 10, the counting will be starts from the after 10 position.

console.log("starting position of is(It will starts counting from the last):-", str8.lastIndexOf('is')); // it start counting form the last.

console.log("if any character is not apear in this string then it will return:-", str8.indexOf("suhas")); // -1

let str9 = "  This is Javascript Tutorial, It is a good tutorial.  ";

console.log(str9);
console.log(str9.trim()); // it will removes spaces from the starting point and the ending point.
// To remove extra/white spaces from start and end, we use three methods trim, trimStart and trimEnd.

let str10 = "This is Javascript Tutorial, It is a good tutorial.";
console.log("Convert string into Upper Case:", str10.toUpperCase());

let str11 = "This is Javascript Tutorial, It is a good tutorial.";
console.log("Convert string into Lower Case:", str11.toLowerCase());

let str12 = "This is Javascript Tutorial, It is a good tutorial.";
console.log("Replace the string best instead of good:",str12.replace("a good", "the best"));

let str13 = "This is Javascript Tutorial, It is a good tutorial.";
console.log("find the perticular string is includes or not:", str13.includes("Javascript"));
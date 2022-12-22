var countCharA = function(str){
    var counter = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
// //     var charCopy = char.tolowercase();
    if (char == 'a' || char == 'A') {
        // console.log(char);
        counter = counter + 1;
    }
}

// console.log(`Total couunt of "A" and "a" is: ${counter}`);
return counter;

}
var string1 = countCharA("I AM learning JavaScript, the language of internet");
var string2 = countCharA("My favourite movie is LAggAn");
console.log(`\nThe total vowels in String 1 : ${string1}\n`);
console.log(`The total vowels in String 2 : ${string2}`);
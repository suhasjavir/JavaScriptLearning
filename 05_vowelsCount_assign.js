let strTotal = function (str) {
    console.log(`given string is: "${str}"`);
    let counter = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        let charCopy = char.toLowerCase();
        if (charCopy == 'a' || charCopy == 'e' || charCopy == 'i' || charCopy == 'o' || charCopy == 'u') {
            var finChar = char.charAt();
            counter = counter + 1;    
            console.log(`total no of vowel : ${finChar}`);
        }
        
    }
    return counter;
    
}
let strCount = strTotal("I am very good IT Developer");

console.log(`total no of vowels in this string: ${strCount}`);
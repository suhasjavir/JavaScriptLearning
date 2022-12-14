console.log(`----------------1------------------`);
var stringHandsOn = function(){
    var string = `       Hey you are doing good, keep it up       `;
    console.log(`Given a String:`, string);
    console.log(`---------------2-------------------`);
    var strLength = string.length;
    console.log(`Length of given string is:`, strLength);
    console.log(`---------------3-------------------`);
    var strRemspace = string.trim();
    console.log(`After removing extra spaces:`, strRemspace.length);
    console.log(`----------------4------------------`);
    var extspaces = strLength - strRemspace.length;
    console.log(`extra spaces :`, extspaces);
    console.log(`----------------5------------------`);
    console.log(`First character of the string is:`, strRemspace.charAt(0), "Last character of the string is:", strRemspace.charAt(33));
    console.log(`----------------6------------------`);
    var sentence = strRemspace;
    var wordsInSentence = sentence.split(" ");
    console.log(`Total words in the string is:`, wordsInSentence.length);
    console.log(`-----------------7-----------------`);
    console.log(`Index of word "good" is:`, strRemspace.indexOf("good"));
    console.log(`----------------8------------------`);
    console.log(`(usning substring) substring starting for index 22 is:`, strRemspace.substring(22));
    console.log(`(usning slice) substring starting for index 22 is:`, strRemspace.slice(22));
    console.log(`--------------9--------------------`);
    console.log(`Is string ending with "up":`, strRemspace.includes("up"));
    console.log(`--------------10--------------------`);
    console.log(`Is string starting with "Hey":`, strRemspace.includes("Hey"));


}
stringHandsOn()
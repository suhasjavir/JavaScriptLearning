var stringTempletAssign= function(){
console.log(`My dream company is: "Cybage Software"`);
var hobby1 = `travalling`;
var hobby2 = `trackeing`;
var hobby3 = `playingCricket`;
var result = hobby1.concat( ", ", hobby2, ", ", hobby3);
console.log(`My Hobbies are:`, result); 
console.log(`My Hobbies are: ${hobby1} and ${hobby2} and ${hobby3}`);
}
stringTempletAssign();
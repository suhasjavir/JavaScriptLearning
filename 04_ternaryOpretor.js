var studResult = function(sscMarks) {
    var resultPassOrFail = sscMarks>= 35 ? "Pass" : "Fail";
    return resultPassOrFail;
}
var result = studResult(39)
console.log(`Student Result is: ${result}`);
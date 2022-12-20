// Function Expression
var showResult = function() {
    console.log(`This is a function Expression`);
}
showResult();
// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    return result;
}
var result = substraction(45, 20);
console.log(`substraction of 45 and 20 is:....... ${result}`);
console.log();
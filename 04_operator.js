var num1 = 10;
var num2 = 5;

console.log(`============ Arithmetic Operators =================`);
var addResult = num1 + num2;
console.log(`Addition is ${addResult} `);

console.log(`Subtraction is ${num1-num2}`);
var mulResult  = num1 * num2;
console.log(`Multiplication is ${mulResult}`);
 
var divResult = num1 / num2;
console.log(`Division is ${divResult}`);

var modulusResult = num1 % num2;
console.log(`Modulus is ${modulusResult}`);

var modulusResult = num1 % 4;
console.log(`Modulus is ${modulusResult}`);

console.log(`============ Unary Operators =================`);
var num3 = 10;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res}`);

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`)
console.log(`> Operator - Greater than ${num1>num3}`)

var result = num1 < num2;
console.log(`< Operator - Less than ${result}`)

var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`)

var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);

console.log(`Check even or ODD: ${11%2}`);


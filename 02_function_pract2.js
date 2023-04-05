
console.log('Function with argument and return type.\n'); 

function multiply(num1, num2) {
  var result = num1 * num2;
  console.log(result,'\n');
  return result;
}
var multiplyresult = multiply(56, 45);
var finalresult = multiplyresult + 100;
console.log(finalresult);

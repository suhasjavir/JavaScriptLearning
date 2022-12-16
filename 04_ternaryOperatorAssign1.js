var gratestNumber = function (no1, no2) {
  var val1 = no1;
  var val2 = no2;
  var result = val1 > val2 ? `Yes` : `No`;
  console.log(`The Number "${no1}" is greater than "${no2}": ${result}`);
};
gratestNumber(10, -10);
gratestNumber(800, 899);
console.log(`-------------------------------------------`);
var checkOddEven = function (val) {
  var res = val % 2 == 0 ? `Even Number` : `Odd Number`;
  return res;
};
console.log(`The given value val 29 is :  ${checkOddEven(29)}`);
console.log(`The given value val 44 is :  ${checkOddEven(44)}`);
console.log(`The given value val 0 is :  ${checkOddEven(0)}`);
console.log(`The given value val 101 is :  ${checkOddEven(101)}`);
console.log(`-------------------------------------------`);
var wordEvenOrOdd = function (word) {
  var wordLen = word.length;
  var reslen = wordLen % 2 == 0 ? `Even` : `odd`;
  return reslen;
};
console.log(
  `The given String Length of "javascript" is Odd Or Even : ${wordEvenOrOdd(
    "javascript"
  )}`
);
console.log(
  `The given String Length of "developer" is Odd Or Even : ${wordEvenOrOdd(
    "developer"
  )}`
);
console.log(
  `The given String Length of "google" is Odd Or Even : ${wordEvenOrOdd(
    "google"
  )}`
);

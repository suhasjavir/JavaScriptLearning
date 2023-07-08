console.log(`=======| swipe two variables using third variable |========`);
console.log(`====swapping string====`);
var val1 = 'Javir';
var val2 = 'Suhas';
console.log(`befor swap: ${val1} ${val2}`);
var temp = val1;
val1 = val2;
val2 = temp;
console.log(`After swap: ${val1} ${val2}`);

console.log(`===========================`);
console.log(`====swapping Numbers====`);

var no1 = 100;
var no2 = 200;
console.log(`Before swaping: ${no1} ${no2}`);
var temp = no1;
no1 = no2;
no2 = temp;
console.log(`After swaping: ${no1} ${no2}`);
console.log(`===========================`);
console.log(`=======| swipe two variables without using third variable |========`);
console.log(`====swapping string====`);
var value1 = 'Maharashtra';
var value2 = 'Tilak';
console.log(`befor swap: ${value1} ${value2}`);
// var temp = val1;
// val1 = val2;
// val2 = temp;
[value1, value2] = [value2, value1];
console.log(`After swap: ${value1} ${value2}`);

console.log(`===========================`);
console.log(`====swapping without using third variable Numbers====`);

var number1 = 1000;
var number2 = 2000;
console.log(`Before swaping: ${number1} ${number2}`);
// var temp = no1;
// no1 = no2;
// no2 = temp;
[number1, number2] = [number2, number1 ];
console.log(`After swaping: ${number1} ${number2}`);
console.log(`===========================`);

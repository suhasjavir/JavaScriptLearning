// console.log("swap two numbers using third variable");

// let a=10;
// let b=20;
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);

console.log("----------------------------------------------------");
console.log("swap two numbers without using third variable");

let a=10;
let b=20;
a=a+b;  //a=30
b=a-b;  //b=30-20 ==  b=10
console.log('b',b);
a=a-b;  // a=30-10 == a=20
console.log('a',a);

console.log("----------------------------------------------------");

console.log(`=======| swipe two variables without using third variable |========`);
console.log(`====swapping string====`);
var value1 = 'Maharashtra';
var value2 = 'Tilak';
console.log(`befor swap: ${value1} ${value2}`);
[value1, value2] = [value2, value1];
console.log(`After swap: ${value1} ${value2}`);

console.log("----------------------------------------------------");

console.log(`=======| swipe two variables without using third variable |========`);

var str1="Javir";
var str2="Suhas";
console.log(`Before swap: ${str1} ${str2}`);
[str1, str2]=[str2, str1];
console.log(`After swap: ${str1} ${str2}`);
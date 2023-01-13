let show = () => {
    console.log(`1) Simple message with arrow function\n   "Good Morning, Today is Monday"`);
}
show();
console.log(`---------------------------------------------------`);
console.log(`2) Multiplication of given three values.`);
let mul = (n1, n2, n3 = 1) => {
    console.log(`   multiplication of ${n1}, ${n2}, ${n3} is: ${n1 * n2 * n3}`);
}
mul(5, 5, 2);
mul(10, 4);
console.log(`---------------------------------------------------`);
console.log(`3) Addition of 5 parameters and return it.`);
let add = (val1, val2, val3, val4, val5) => {
    var addResult = val1 + val2 + val3 + val4 + val5;
    return addResult;
}
var addResult = add(100, 100, 200, 349, 756);
console.log(`   The addition of given 5 nos: ${addResult}`);
var addResult = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`   The addition of given 5 Strings: ${addResult}`);
console.log(`---------------------------------------------------`);
// Let and const.
// var is function/Globle scope and let and const is block scope.

// string template / template leterals.

// default function arguments.

function mul(a, b=5) {
    return a * b;
}
console.log(mul(5));

// fat arrow function.
// using normal function.
console.log(sum());

function sum() {
    let a = 5, b = 6;
    return `The sum of two number is: ${a + b}`;
}

// we convert the normal function in fat arrow function.

const sum1 = () => `\nUsing fat arrow function:\nThe sum of two number is: ${(a = 5) + (b = 6)}`;
console.log(sum1());
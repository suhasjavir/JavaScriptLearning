
// use of math method (Math.round, Math.PI, Math.ceil, Math.floor,
//  Math.trunc, Math.pow, Math.sqrt, Math.min, Math.max)

console.log(Math.PI); // the value of PI using Math Object.

let x = 4.7;
console.log(`X value is: ${x}`);

// Using Math.round we can round up the value.

console.log(`X's Round up value is: ${Math.round(x)}`);

let z = 4.2;
console.log(`z's Round up value is: ${Math.round(z)}`);

console.log(`Z's greater/upper limit value is: ${Math.ceil(z)}`);

console.log(`z's floar/Minimum value is: ${Math.floor(z)}`);
console.log(`\nMinimum value using trunc`);
console.log(`z's floar/Minimum value is: ${Math.trunc(z)}`);

let p = Math.pow(10, 3);
console.log(p); //10 * 10 * 10 = 1000

let q = Math.sqrt(100);
console.log(q); 

let r = Math.min(73, 71, 1, 39, 889, 99, 81, 21, 32, 15);
console.log(r);

let s = Math.max(73, 71, 1, 39, 889, 99, 81, 21, 32, 15);
console.log(s);

console.log(`\n Generates random Numbers.\n`);

let a = Math.random();

console.log(`This method will be generates no between 0 to 1: ${a}`);

let b = (Math.random() * 10) + 1;

console.log(`This method will be generates no between 1 to 10: ${b}`);

let c = Math.floor(Math.random() * 10) + 1;

console.log(`This method will be generates no between 1 to 10 Rounded no's: ${c}`);
console.log(`\n--------------------------------------------------------------\n`);
// WAP to print random no's from 15 25.

console.log(`WAP to print random no's from 15 25.`);
let no = Math.floor(Math.random() * (25 - 15) + 15);

console.log(no);

console.log(`WAP to print random no's between given two no's using function.`);

function getRandom(min, max){
    // let x = Math.floor(Math.random() * (max - min)) + min;
    let x = Math.floor(Math.random() * (max - min)) + min;
    return x;
}
console.log(getRandom(10, 20));
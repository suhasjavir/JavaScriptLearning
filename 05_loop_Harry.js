// write a js program to print sum of 1 to 10.
console.log("Problem: 2) Sum of 1 to 10, one by one.");
let sum = 0;
for (let index = 1; index <= 10; index++) {
    sum += index;
    console.log(`${sum}`);
}

// write a js program to print sum of even no between 1 to 100;

let sum1 = 0;
for (let index = 1; index <=100; index++) {
    if (index % 2 == 0) {
        sum1 += index;
    }
}
console.log("\nProblem: 2) Sum of even no between 1 to 100:", sum1);
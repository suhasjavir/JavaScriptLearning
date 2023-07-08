// Ternery Operator is shorter version of "if else".
// that takes three oprands.

console.log(`Check eligibility using if else condition.`);

var age = 19;
if (age >= 18) {
    console.log(`You can Vote.`);
} else {
    console.log(`You can't Vote.`);
}
console.log(`---------------------------------------------`);
console.log(`Above program using ternary operator.`);
console.log((age >= 18) ? "You can Vote." : "You can't Vote.");
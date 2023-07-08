console.log(`find the entered age is between 11 to 19  or not using the if else statement.`);
let age=16;
if (age>10 && age<20) {
    console.log(`your age lies between 10 and 20`);
} else {
    console.log(`your age can not lies between 10 and 20`);
}

console.log(`-----------------------------------------------------------------`);

console.log(`Perform the switch case statements on entered age.`);

// let age=11;
switch (age) {
    case 11:
        console.log(`"Switch Case": Your age is 11.`);
        break;
    case 12:
        console.log(`"Switch Case": Your age is 12.`);
        break;
    case 13:
        console.log(`"Switch Case": Your age is 13.`);
        break;
    case 14:
        console.log(`"Switch Case": Your age is 14.`);
        break;
    case 15:
        console.log(`"Switch Case": Your age is 15.`);
        break;
    case 16:
        console.log(`"Switch Case": Your age is 16.`);
        break;
    case 17:
        console.log(`"Switch Case": Your age is 17.`);
        break;
    case 18:
        console.log(`"Switch Case": Your age is 18.`);
        break;
    case 19:
        console.log(`"Switch Case": Your age is 19.`);
        break;

    default:
        console.log(`"Switch Case": Sorry!!! your age is not special.`);
        break;
}

console.log(`-----------------------------------------------------------------`);

console.log(`Print the age, if age is divisible by 2 and 3`);

if (age % 2 == 0 && age % 3 == 0) {
    console.log(`your age is divisible 2 and 3.`);
} else {
    console.log(`your age is not divisible 2 and 3.`);
}
console.log(`-----------------------------------------------------------------`);

console.log(`Print the age, if age is divisible by 2 or 3`);

if (age % 2 == 0) {
    console.log(`your age is divisible 2.`);
} else if (age % 3 == 0) {
    console.log(`your age is divisible 3.`);
} else {
    console.log(`your age is not divisible 2 or 3.`);
}

console.log(`-----------------------------------------------------------------`);

console.log(`Print "You can drive" or "You can not drive" based on age being greater than 18 using ternary operator.`);

let a = age > 18 ? "You can drive." : "You can not drive.";

console.log(`Your age is ${age}, ${a}`);
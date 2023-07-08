// Find the area of circle, triangle and rectangle.
console.log(`Using Nested if else condition.`);
var area = "rectangl";
var PI = 3.142, l = 5, b = 4, r = 3;
if (area === "circle") {
    console.log("The area of the circle is: ", PI * r ** 2);
} else if (area === "triangle") {
    console.log("The area of triangle is: ", (l * b) / 2);
} else if (area === "rectangle") {
    console.log("The area of rectangle is: ", (l * b));
} else {
    console.log(`Please enter valid data`);
}

console.log(`-------------------------------------------------------------------`);
console.log(`Using Switch case statement.`);
switch (area) {
    case "circle":
        console.log("The area of the circle is: ", PI * r ** 2);
        break;
    case "triangle":
        console.log("The area of triangle is: ", (l * b) / 2);
        break;
    case "rectangle":
        console.log("The area of rectangle is: ", (l * b));
        break;

    default:
        console.log(`Please enter valid data`);
        break;
}
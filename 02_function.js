
console.log(`Function with no argument and no return type\n`);
function display() {
  console.log("My name: Mohit");
  console.log("My sirname is: Sharma");
}
display(); // Function call or function invocation
// Write a function show which should log you college name

console.log(`\nFunction with argument and no return type\n`);


function add(val1, val2) {
  console.log(val1 + val2,'\n');
}
add(10, 20);


function showDetails(myName) {
  console.log("Details", myName);
}
showDetails("Mohit Sharma");


function swapValues(value1, value2) {
  console.log("\nBefore Swap: ", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap: ", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("Kishor", "Hitesh");
swapValues("You", "Me");
function hello(myName) {
  console.log("\n", myName);
}
hello("Sachin");
console.log("\nFunction with arguments and return value");
function rajuBhaiya(paisa) {
  console.log("Going in market", paisa);
  console.log("Purchased fresh vegetables", paisa);
  console.log("Come back");
  return "Bag of vegetables\n";
}
var bagOfVegetables = rajuBhaiya(100);
console.log(bagOfVegetables);


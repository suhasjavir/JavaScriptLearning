//*******************************************function with no argument and no return type.
function display() {
  //creating a function.
  console.log("My name: Suhas."); //to print this value
  console.log("My sirname is: Javir.", '\n'); //to print this value
}
display(); //call or invocation the function


function show() {
  console.log("My Collage Name: Tilak Maharashtra Univercity.");
}
show();


//*******************************************function with argument and no return type.
function showDetails(myName) {
  console.log("\nDetails:", myName);
}
showDetails("Suhas Javir");
showDetails("Popat Madane");
showDetails("Rupali Arjun");
//*********************************************************
// var value1 = 100;
// var value2 = 200;
// console.log("Befor Swap", value1, value2);
// var temp = value1;
// value1 = value2;
// value2 = temp;
// console.log("Befor Swap", value1, value2);

console.log(`\n-- swaping values using function --`);

function swapValues(value1, value2) {
  console.log("\nBefor Swap: ", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("kishor", "hitesh");
swapValues("you", "me");

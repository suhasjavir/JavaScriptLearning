
// Function Syntax.

// function functionName(){
//     stmt1;
//     stmt2; 
// }

// This is simple function. 
function sum() {
    var a = 10;
    var b = 30;
    var total = a + b;
    console.log(`sum of ${a} and ${b} is: ${total}`);
}
sum();

// Function with arguments.

function sum1(a, b) { // the a and b are parameters.
    var total = a + b;
    console.log(`Sum of ${a} + ${b} is: ${total}`);
}

sum1(30, 50); // the 30 and 50 are arguments.
sum1(50, 20);

// Function Expression 

// when we define a function as value of variable that's called as function expression.

function sum2(a, b) { 
    return a + b;
}

var funExpre = sum2(30, 50); // this is the function expression.
console.log(`Sum is: ${funExpre}`);

// anonymous function

var funExpr = function(a, b) {
    return a + b;
}

var add = funExpr(30, 20);
console.log(`addition of two no is: ${add}`);
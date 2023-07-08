
console.log(`Function with arguments.`);
function mulTable(val) {  // Val is called as "Parameter".
    for (let i = 1; i <= 10; i++) {
        console.log(`${val} X ${i} = ${val * i}`);
    }    
}

mulTable(2);

console.log(`Suhas This is Function`);

mulTable(10);  // 10 is called as "Argument".

console.log(`---------------------------------------------------------------------------------`);

console.log(`write a function for addition of given two arguments.`);

function add(num1, num2){
     let result= num1 + num2;
     console.log(`Additon of ${num1} and ${num2} is: ${result}`);
}
add(5, 10);
add(20, 30);

console.log(`---------------------------------------------------------------------------------`);
console.log(`The arguments object.`);

function addition(){
    if(arguments.length == 0){
        console.log(`No arguments passed.`);
    } else{
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        console.log(`The addition of arguments is: ${sum}`);
    }
}

let addi = addition; // we can store one function in variable, 
// we can access this function using function name or using variable name. 

addition();
addi(5);
addition(5, 6);
addi(5, 6, 9);
addition(5, 6, 9, 4);


console.log(`---------------------------------------------------------------------------------`);
console.log(`Return value in function.`);

function res(no1, no2){
    return no1 + no2;
}
let output = res(5, 7);
console.log(`addition of Two no using return function is: ${output}`);

console.log(`Compare two values using return function.`);

function compare(a, b){
    if (a > b) {
        return 1;
    } else if(b > a) {
        return -1;
    } else {
        return 0;
    }
}

let result = compare(6, 5);
console.log(`A is greater than B: ${result}`);

let result1 = compare(5, 6);
console.log(`B is greater than A: ${result1}`);

let result2 = compare(6, 6);
console.log(`A and B are Equal: ${result2}`);
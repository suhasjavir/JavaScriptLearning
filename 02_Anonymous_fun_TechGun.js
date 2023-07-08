
// Normal Function.

function suhas() {
    console.log(`Hello Suhas, This is normal Function.`);
    document.write(`Hello Suhas, This is normal Function.`);
}
suhas();
console.log(`---------------------------------------------------------------------`);

// Function Expression.

let suhas1 = function(){
    console.log(`Hello Suhas, This is function expression.`);
};
suhas1();

console.log(`\n---------------------------------------------------------------------`);

// Set time out function.

function suhas2(){
    console.log(`Hello Suhas, This is set time out function.`);
}
setTimeout(suhas2, 3000);



// Anonymous Function.

setTimeout(function (){
    console.log(`\n---------------------------------------------------------------------`);
    console.log(`Hello Suhas, This is anonymous function.`);
}, 3000);
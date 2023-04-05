console.log(`\n=========== Addition of two numbers - using function - Return value ===========\n`);
function add(no1, no2){
    // return no1 + no2;
    let c = no1 + no2;
    return c;
}
let d = add(7, 8);

console.log(d);

console.log(`\n=========== Addition of two numbers - using function - Return value ===========\n`);

// In function block we can use return stmt at once,
// But, there is another way to multiple return stmt in our program by using "if else", in if else we can use
// multiple return stmts but it will executs only one return stmt.

function compare(a, b){
    let e;
    if(a > b){
        e = 'a is greater than b';
        return e;
    } else if (b > a){
        e = 'b is greater than a';
        return e;
    }
    else{
        e = 'a and b are equal';
        return e;
    }
}
let finalcomp = compare(7, 6);

console.log(finalcomp);
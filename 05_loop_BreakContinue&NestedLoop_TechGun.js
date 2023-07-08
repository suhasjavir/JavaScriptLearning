// print your name 10 times using for loop.
console.log("For Loop");
for (let index = 1; index <= 5; index++) {
    console.log(index, "suhas javir");
}

console.log(`--------------------------------------------------------------------------`);
// in this above program break the for loop when counter is 6(print only 5 times)
console.log("Use of Break Statement");
for (let index = 1; index <= 5; index++) {
    if(index == 3){
        break; // using this break statement we can break the loop when index is 3 and execution will be stopped.
    }
    console.log(index, "Suhas Javir");
}

console.log(`--------------------------------------------------------------------------`);
// in this above program use continue statement for skip that perticular element(skip the 4 eteration)
console.log("Use of Continue Statement");

for (let index = 1; index <= 5; index++) {
    if (index == 3 || index == 4) {
        continue;
    }
    console.log(index, "Suhas Javir");
}


console.log(`--------------------------------------------------------------------------`);
// in this above program add nested loop (nested loop), and this nested loop use the break and continue statements.
console.log("Use of Nested Loop");

outer: for (let index = 1; index <= 5; index++) {
    console.log(index);
    for (let index2 = 1; index2 < 3; index2++) {
        if (index == 5) {
            break outer;  // we can use continue also in this way.
            // using of outer lable of line no 33 we can set break on inner for loop.
            // so it will not print elements for 5 iteration.
        }
        console.log(index2, "Suhas");
    }
}
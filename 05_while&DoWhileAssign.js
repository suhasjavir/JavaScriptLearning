console.log(`wap to print numbers from 5 to 15 by incrementing 1, using while loop.`); 
var i = 5;
while(i <= 15){
    console.log(i);
    i++;
}
console.log(`wap to print numbers from 50 to 40 by decrementing 1, using while loop.`); 
var i = 50;
while (i >= 40) {
    console.log(i);
    i--;
}
console.log(`find the first 15 odd numbers, using while loop.`); 
i = 1;
while (i <= 30 ) {
    if (i % 2 !== 0) {
        console.log(i);
       }
       i++; 
}
console.log(`find the first 15 even numbers, using do while loop.`);
var i = 1;
do {
    if (i %2 === 0) {
        console.log(i);
    }
    i++
} while (i <= 30);
console.log(`wap to print table of 5, using do while loop.`); 
var i = 5;
do {
    console.log(i);
    i = i + 5;
} while (i <= 50);
console.log(`wap to print table of 10, using do while loop.`); 
var i =  10;
do {
    console.log(i);
    i = i + 10;
} while (i <= 100);
console.log(`wap to print table of 10 in reverse order, using do while loop.`); 
var i = 100;
do {
    console.log(i);
    i = i - 10;
} while (i >= 10);
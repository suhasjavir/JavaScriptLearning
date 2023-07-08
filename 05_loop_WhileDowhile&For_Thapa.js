console.log(`While Loop.`); 

var num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
console.log(`----------------------------------------------`);
console.log(`\nDo While loop.`);
var no = 1;
do {
    console.log(no);
    no++;
} while (no <= 5);
console.log(`----------------------------------------------`);
console.log(`\nFor loop.`);

for (let index = 1; index <= 5; index++) {
    console.log(index);
}
console.log(`----------------------------------------------`);
console.log(`\nPractice.`);
console.log(`Write the javascript program to print table for 8, 9 , 12, 15. Using for loop.`);

var no = 8;
for (let index = 1; index <=10; index++) {
    console.log(`${no} * ${index} = ${no * index}`); 
}
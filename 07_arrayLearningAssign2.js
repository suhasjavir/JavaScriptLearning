const arrayOfNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given array is:"[${arrayOfNumbers}]"`);
console.log(`1) Total elements in array: ${arrayOfNumbers.length}`);
console.log(`2) The first element in the array is: ${arrayOfNumbers[0]}, \nand the last element in the array is: ${arrayOfNumbers[arrayOfNumbers.length - 1]}.`);
console.log(`3) The third last element in the array is: ${arrayOfNumbers[arrayOfNumbers.length-3]}`);
// console.log(`4)`);
let evenNo = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
         if (element % 2 == 0) {
            evenNo.push(element);
    }
}
let joinEvenNo = evenNo.join(", ")
console.log(`4) All even numbers in arraay: ${joinEvenNo}`);
// console.log(`5) `);
let oddNo = [];

   for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element % 2 != 0) {
        oddNo.push(element)
    }
   }
   let joinResult = oddNo.join(", ");
   console.log(`5) All odd numbers in arraay: ${joinResult}`);
//    console.log(`6) `);
   let evenPositionNo = [];
for (let index = 0; index <= arrayOfNumbers.length-1; index++) {
    const element = arrayOfNumbers[index];
    if (index % 2 == 0) {
        evenPositionNo.push(element)
    }
}
console.log(`6) Even Positioned Elements: ${evenPositionNo}`);
// console.log(`7)`);
let oddPositionNo = [];
for (let index = 0; index <= arrayOfNumbers.length-1; index++) {
    const element = arrayOfNumbers[index];
    if (index % 2 != 0) {
     oddPositionNo.push(element);   
    }
}
console.log(`7)  odd Positioned Elements: ${oddPositionNo}`);
// console.log(`8) `);
var sumElement = 0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    sumElement = sumElement + element;
}
console.log(`8) Sum of all Array elements: ${sumElement}`);
// console.log(`9) `);
let elementMultiple5 = [];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    if (element % 5 == 0) {
        elementMultiple5.push(element);
    }
}
console.log(`9) The array element which are multiple of 5: ${elementMultiple5}`);
// console.log(`10)`);
let isAvailable = arrayOfNumbers.includes(115);
console.log(`10) Is number 115 available in array: ${isAvailable}`);
// 11)
let availeble = arrayOfNumbers.includes(23);
console.log(`11) Is number 23 available in array: ${availeble}`);
// console.log(`12)=============`);
console.log(`12) array is                        : ${arrayOfNumbers}`);
arrayOfNumbers.splice(3, 0, 55, 66);
console.log(`Insert numbers 55, 66 before index 3: ${arrayOfNumbers}`);
// console.log(`13)============`);
console.log(`13) array is                           : ${arrayOfNumbers}`);
arrayOfNumbers.splice(4, 3);
console.log(`Delete 3 elements starting from index 4: ${arrayOfNumbers}`);
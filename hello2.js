const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
//length
console.log(`1.Total elements available are := "${arrayNumber.length}`);
console.log(`-----------------------------------------------------------------------`);
//first and last element
console.log(`2.First element in given array is ${arrayNumber[0]} and Last element is ${arrayNumber[10]}`);
console.log(`-----------------------------------------------------------------`);
//log last 3rd
let last3 = `${arrayNumber[8]}`;
console.log(`3. last 3 element and log using Lenth Property:=  ${last3}`);
console.log(`-------------------------------------------------------------`);
//find even num
const odds1 = [];  //empty array
for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
  if (element % 2 === 0) {
    odds1.push(element);
  }
}
console.log(`4. Even number from given  array:= `, `${odds1}`);
//find odd num
console.log(`-------------------------------------------------------------------------`);
const odds2 = [];
for (let index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
  if (element % 2 !== 0) {
    odds2.push(element);
  }
}
console.log(`5. Odd number from given  array:= `, `${odds2}`);

//all even positioned
console.log(`--------------------------------------------------------`);
var evenp = [];
for (var index = 0; index < arrayNumber.length;index = index + 2) { //i++  i=i+1
  evenp.push(arrayNumber[index]);
  //console.log(index);
}
console.log(`6.  all even positioned element  array:= `, `${evenp}`);
//all odd positioned
console.log(`-----------------------------------------------------`);
console.log();
var oddp = [];
for (let index = 1; index < arrayNumber.length; index = index + 2) {
  oddp.push(arrayNumber[index]);
}
console.log(`7. all odd positioned element  array:= `, `${oddp}`);
console.log(`--------------------------------------------------------------`);
//sum of array
let arrayOfSalaries = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let sumOfSal = 0; // 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
  const element = arrayOfSalaries[index]; // 10000 20000 30000
  sumOfSal = sumOfSal + element;
}
console.log(`8. Sum of all elements:= ${sumOfSal}`);
console.log(`-----------------------------------------------------------------------`);
//find multiple of 5 n.m
console.log();
// for (const iterator of arrayNumber) {
//     if (iterator %5===0) {
//         console.log(iterator);
//     }
// }
var mul = [];
for (var index = 0; index < arrayNumber.length; index++) {
  const element = arrayNumber[index];
  if (element % 5 === 0) {
    mul.push(element);
  }
}
console.log(`9. find multiple of 5:= `, `${mul}`);
console.log(`-----------------------------------------------------------------`);
//check present or not
console.log(`10.Is Number "115" available in Given array ${arrayNumber}`);
if (arrayNumber.includes(115)) {
  console.log(`IsAvailable`);
} else {
  let isAvailable = arrayNumber.includes(115);
  console.log(isAvailable);
}
console.log(`--------------------------------------------------------------------`);
//check present or not
console.log(`11.Is Number "23" available in Given array ${arrayNumber}`);
if (arrayNumber.includes(23)) {
  let isAvailable = arrayNumber.includes(23);
  console.log(isAvailable);
} else {
}
//insert number in array
console.log(`----------------------------------------------------------------------------`);
arrayNumber.splice(3, 0, 55, 66);
console.log(`12. insert number "55,66" before index 3 := ${arrayNumber}`);
console.log(  `------------------------------------------------------------------------`);
//delete element
console.log(`13.`, arrayNumber);
var spliceResult = arrayNumber.splice(3, 4);
console.log(
  `13. Aftr delete 3 element  starting  from index 4 := ${arrayNumber}`);
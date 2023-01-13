const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`=============== 1) Log the array element with its index. ===============`);
arrayNumbers.forEach((element,index) => {
    console.log(`given value is: ${element}, & it's index no is: ${index}`);
});
console.log(`======= 2) find the positive no using forEach with arrow function =======`);
// const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
// const arraypositive=[]; // for log the array of positive nos.
arrayNumbers.forEach((element)=>{
    if(element >= 0){
    console.log(element);
    // arraypositive.push(element);// for log the array of positive nos.
}
});
// console.log(arraypositive);// for log the array of positive nos.
console.log(`======= 3) find the negative no create new array using forEach with arrow function =======`);
// const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
const arraNegative = [];
arrayNumbers.forEach((element)=>{
    if (element < 0) {
        arraNegative.push(element);
    }
// console.log(element);
});
console.log(arraNegative);
console.log(`======= 4) find the Even no using forEach with arrow function =======`);
// const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element)=>{
    if (element%2==0) {
        console.log(element);
    }
});
console.log(`======= 5) find the sum of all elements from array =======`);
// const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
var sum = 0;
arrayNumbers.forEach((element)=>{
    sum += element;
});
console.log(`sum of all elements in array: ${sum}`);
console.log(`======= 6) log the even positined array value using forEach with arrow function =======`);
// const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((element, index)=>{
    if (index%2==0) {
        console.log(element);
    }
});
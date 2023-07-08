// Find duplicate elements in Array.

console.log(`1--> Find the duplicate elements in array.`);
const arr = [1,3,4,1,6,7,99,4];
const dup = arr.filter((ele,ind)=>{
    return arr.indexOf(ele) != ind;
});
console.log(dup);

//Find max and min value in array.
console.log('2--> Find the min and max values in array.');
const arr1 = [1,3,105,106,6,7,999,4];
let max = Math.max(...arr1);
let min = Math.min(...arr1);
console.log(min, max);

//Find Second largest value in array
console.log(`3--> Find the second largest value in array.`);
const a = [2000,199,3,105,106,6,7,999,4];
let lar = 0;
let slar = 0;
for(let i=0;i<a.length;i++){
    if(a[i]>lar){
        slar = lar;
        lar = a[i]
    }
    if(a[i]<lar && a[i]>slar){
        slar = a[i]
    }
}
console.log(lar, slar);

//Using second method
console.log(`4--> Find the second largest value in array.`);
var lar1 = Math.max(...a)
console.log(lar1);
let index = a.indexOf(lar1);
console.log(index);
a.splice(index,1);
var lar1 = Math.max(...a)
console.log(lar);

//Find missing number in array
console.log(`5--> Find the missing number in array.`);
const a1 = [1,2,3,4,8,9];
const missing = [];
for(let i=1;i<=10;i++){
    if(a1.indexOf(i)==-1){
        missing.push(i);
    }
}
console.log(missing);

//Find even and odd numbers in array
console.log(`6--> Find even and odd numbers in array.`);
const a2 = [1,2,3,4,8,9];
const even = [];
const odd = [];
for(let ele of a2){
    if(ele%2==0){
        even.push(ele);
    }
    else{
        odd.push(ele)
    }
}
console.log(even,odd);

//Find sum of all elements in array
console.log(`7--> Find sum of all elements in array`);
const a3 = [1,2,3,4,8,9];
let sum = a3.reduce((pre,cur)=>{
    return pre+cur;
})
console.log(sum);

//Find factorial of given number
console.log(`8--> Find factorial of given number`);
let num = 5;
let fact = 1;
for(let i=num; i>0;i--){
    fact = fact*i;
}
console.log(fact);

//Find prime number 
console.log(`9--> Find prime number`);
let num1 = 4;
let isPrime = true;
if(num1<1){
    console.log(`${num1} is not prime number`);
}
else if(num1==1){
    console.log("Number is not prime not composite");
}
else{
    for(let i=2;i<num1;i++){
        if(num1%i==0){
            isPrime = false
        }
    }
    if(isPrime){
        console.log(`${num1} is prime number`);
    } 
    else{
        console.log(`${num1} is not prime number`);
    }    
}

//Reverse given string
console.log(`10--> Reverse given string.`);
let str = "amit shinde";
let revStr = '';
for(let i=str.length-1;i>=0;i--){
    revStr = revStr + str.charAt(i);
}
console.log(revStr);

//Reverse given number
console.log(`11--> Reverse given number.`);
let num2 = 1502;
let revNum = 0;
while(num2>0){
    let rem =num2%10;
    revNum = revNum*10 + rem;
    num2 = parseInt(num2/10);
}
console.log(revNum);

//Swap two variables without third variable
console.log(`12--> Swap two variables without third variable.`);
let a4 = 10;
let b = 5;
a4=a4+b;
b=a4-b;
a4=a4-b;

console.log(a4,b);

//Merge two arrays and sort them
console.log(`13--> Merge two arrays and sort them.`);
const a5 = [1,4,6,7];
const b5 = [11,14,16,17];
const c = [...a5,...b5];
console.log(c);
let sort = c.sort((x,y)=>{
    return x-y;
});
console.log(sort);

//Find factor of given number
console.log(`14--> Find factor of given number.`);
let num3 = 15;
for(let i=1;i<=num3;i++){
    if(num3%i==0){
        console.log(`Factor of ${num3} is ${i}`);
    }
}

//Compare two arrays equal or not
console.log(`15--> Compare two arrays equal or not.`);
const a6 = [2,5,7,9,25];
const b6 = [23,2,9,5,7];

if(a6.sort().toString()==b6.sort().toString()){
    console.log('Arrays are equal');
}else{
    console.log('Arrays are not equal');
}

//Find intersection of two arrays
console.log(`16--> Find intersection of two arrays.`);
const a7 = [1,2,3,4,5,6,1];
const b7 = [1,5,6,7,8,9];
const c7 = a7.filter((ele)=>{
    return b7.includes(ele);
})
console.log([...new Set(c7)]);

//Find union of two arrays
console.log(`17--> Find union of two arrays.`);
const a8 = [1,2,3,4,5,6,1];
const b8 = [1,5,6,7,8,9];
const union = [...a8,...b8];
console.log([...new Set(union)]);

//Converts first letter to uppercase
console.log(`18--> Converts first letter to uppercase.`);
let str9 = "my name is amit";
let b9 = str9.split(" ");
var str1 = '';
console.log(b9);
for(let i=0;i<b9.length;i++){
    str1 = str1 +" "+ b9[i].charAt(0).toUpperCase() + b9[i].slice(1);
}
console.log(str1);

//Fibonacci series
// console.log(`19--> Fibonacci series.`);
// let a = [0,1];
// for(let i = 2; i<10; i++){
//     a.push(a[i-2]+a[i-1]);
// }
// console.log(a);

//Print * pyramid pattern
// console.log(`20--> Print * pyramid pattern.`);
// for (let i = 1; i < 6; i++) {
//     let sum = '';
//   for (let j = 1; j <= i; j++) {
//     sum = sum +" "+ '*';
//   }
//     console.log(sum); 
// }

//Find occurance of letter
// console.log(`21--> Find occurance of letter.`);
// let name = 'amita';
// let occ = {};
// for(let char of name){
//     if(occ[char]){
//         occ[char]++
//     }
//     else{
//         occ[char]=1;
//     }
// }
// console.log(occ);

//Find row table of given number
// console.log(`22--> Find row table of given number.`);
// let num = 5;
// for(let i=1;i<=10;i++){
//     var res = num*i;
//     console.log(`${num} x ${i} = ${res}`);
// }

//Find string is anagram or not
// console.log(`23--> Find string is anagram or not.`);
// let a = 'Amit';
// let b = 'tmia';

// let c = a.split('').sort().join('').toLowerCase();
// let d = b.split('').sort().join('').toLowerCase();
// if(c==d){
//     console.log('Given strings are anagram');
// }
// else{
//     console.log('Given strings are not anagram');
// }

//Sort array without using sort method
// console.log(`24--> Sort array without using sort method.`);
// const a = [3,45,67,21,9,1];
// let sort;
// for(let i=0;i<a.length;i++){
//     for(let j=i;j<a.length;j++){
//         if(a[i]>a[j]){
//             sort = a[i];
//             a[i]=a[j];
//             a[j] = sort;
//         }
//     }
// }
// console.log(a);


//Armstrong number
// console.log(`25--> Armstrong number.`);
// let num = 371;
// let temp = num;
// var sum = 0;
// let len = num.toString().length;
// while(temp>0){
//     let rem = temp%10;
//     sum = sum + Math.pow(rem,len);
//     temp = parseInt(temp/10);
// }
// console.log(sum);
// if(num == sum){
//     console.log('Given number is Armstrong number');
// }
// else{
//     console.log('Given number is not Armstrong number');
// }


//Find index of name=amit
// console.log(`26--> Find index of name=amit.`);
// const a = [
//     {id:1, name:'Sachin'},
//     {id:2, name:'Amit'},
//     {id:3, name:'Sunil'}
// ];
// const index = a.findIndex((ind)=>{
//     return ind.name == 'Amit';
// });
// console.log('Index of name', index);

//2nd method
// console.log(`27--> Find index of name=amit.`);
// for(let i=0;i<a.length;i++){
//     if(a[i].name == 'Amit'){
//         console.log('Index of name Amit =', i);
//     }
// }

// Using settimeout print 1 to 10 after one second delay.
// console.log(`28--> Using settimeout print 1 to 10 after one second delay.`);
// for(let i=1;i<=10;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000);
// }




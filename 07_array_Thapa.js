var myFriends  = ['Suhas', 'Popat', 'Mahesh', 'Santosh', 'Pramod', 'Sagar', 'Popat'];
// Array.prototype.IndexOf()

console.log(`IndexOf "Mahesh" is: ${myFriends.indexOf("Mahesh", 4)}`);

// Array.prototype.lastIndexOf()

console.log(`The lastIndexOf "Pramod": ${myFriends.lastIndexOf("Popat")}`);

// Searching and filter in an array.
// How to sort and compare an array.


// Array.prototype.includes()
console.log(`"Popat" element is includes or not in the array: ${myFriends.includes("Popat", 2)}`); 

// Array.prototype.push()
// push() method adds one or more elements to the end of an array and returns the new length of the array.

myFriends.push("Bramha"); // this push() method will add the element in array at last.
console.log(myFriends);

// Array.prototype.unshift()
// The unshift() method adds one or more elements to the beginning of the array and returns the new length 
// of the array.

myFriends.unshift("Anant");
console.log(myFriends);

// Array.prototype.pop()
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.

console.log(myFriends);
console.log(`The pop() method removes the element from the last: ${myFriends.pop()}`);
console.log(myFriends); 

// Array.prototype.shift()
// The shift method removes the first element from an array and returns that removed element.
// This method changes the length of the array.

console.log(myFriends);
console.log(`The shift() method removes the element form the start: ${myFriends.shift()}`); 
console.log(myFriends);

// Splice/Crud Oparation on array.
var months = ['Jan', 'march', 'April', 'Jun', 'July'];

console.log(`\nSplice/Crud Oparation on array.\n`);


// Add "Dec" at the end of an array.
console.log(`Add "Dec" at the end of an array.`);
console.log(months);
// months.splice(5, 0, "Dec");
const newMonth = months.splice(months.length, 0, "Dec");

console.log(months);

// what is the return value of splice Method.
console.log(newMonth); 
// spice method will returns how many and which elements are deleted.
// and it will show in array format.

// Upadate "march" to "March".

// var months = ['Jan', 'march', 'April', 'Jun', 'July', 'Dec']

// normal splice method.
// var upadatMonth = months.splice(1 , 1, "March");
// console.log(months);
// console.log(upadatMonth); 
// spice method will returns how many and which elements are deleted.
// and it will show in array format.

// splice method using if else conditon.
const indexOfMarch = months.indexOf("march");
console.log(indexOfMarch);
if (indexOfMarch != -1) {
    var upadatMonth = months.splice(indexOfMarch , 1, "March");
    console.log(months);
    console.log(`The splice method will return: "${upadatMonth}"`); 
} else {
    console.log(`No such data found`);
}


// Delete "June" from an array.
// var months = ['Jan', 'march', 'April', 'Jun', 'July', 'Dec']
var indexOfJune = months.indexOf("Jun");
console.log(indexOfJune);
if (indexOfJune !== -1) {
    const deleteMonth = months.splice(indexOfJune, 1);
    console.log(deleteMonth);
    console.log(months);
} else {
    console.log('No such data found.');
}

// Delete all elements after "March" or from index 1.
// var months = ['Jan', 'march', 'April', 'Jun', 'July', 'Dec']
console.log(`The Months Array is :`);
console.log(months);
var deleteElements = months.indexOf("April");
console.log(`Index no of April is : ${deleteElements}`);
if (deleteElements !== 2) {
    console.log(months.splice(deleteElements, Infinity));
    console.log(months);
} else {
    console.log(`No such data found.`);
}

// Map and reduce methods in array.

// array.prototype.map()


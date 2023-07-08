// using array we can store multiple values in single variable.

// traverse an array.

var myFriends  = ['Suhas', 'Popat', 'Mahesh', 'Santosh', 'Pramod', 'Sagar'];
console.log(myFriends[1]);
console.log(`Total Length: ${myFriends.length}`);
console.log(`log the last element of array: ${myFriends[myFriends.length-1]}`);

console.log(`Print all array elements using normal for loop.`); 
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

// After ES6 we have for..in and for..of loop to traverse an array.
 
console.log(`\nUsing "for..in loop" we can get all elements index no's.`); 

for(let elements in myFriends){  // using for in loop, we can print index nos of an array.
    console.log(elements);
}

console.log(`\nUsing "for..of loop" we can get all elements values.`); 
for (const element of myFriends) {
    console.log(element); // using for of loop, we can print actual elements of an array.
}

// Array.Prototype.forEach();
// Calls a function for each element in the array.

console.log(`\nPrint array elements using forEach.`);
myFriends.forEach(function(element, index, array){ 
    console.log(element);
});

console.log(`Print array elements using forEach.`);
myFriends.forEach(function(element, index, array){
    console.log(`Value: ${element}, Index no: ${index}, Array: ${array}`);
})

console.log(`\nPrint the elements using forEach with fat arrow function.`);

myFriends.forEach((element, index, array)=>{
    console.log(`Value: ${element}, Index no: ${index}, Array: ${array}`);
})

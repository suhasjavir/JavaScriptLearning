// let book1 = "Math";
// let book2 = "Physics";
// let book3 = "Bio";
// let book4 = "Computer Science";
// console.log(book3);

// let book = ["Math", "Physics", "Bio", "Computer Science"];
// console.log(book);  // print all array elements.
// console.log(`"Print the perticular array elements": ${book[2]}`); // print perticular array element.
// book[2] = "English" ; // update any array element.
// console.log(`Updated array elements from "bio" to "English": ${book[2]}`);

console.log(`---------------------------------------------------------------------------`);

console.log(`\n--------------------------- Operations on array ---------------------------\n`);

let book = ["Math", "Physics", "Bio", "Computer Science"];

console.log("find array length:", book.length);

// we use push() to add element at the last. 
book.push("Hindi");
console.log(book);

// we use unshift() to add element at the first. 
book.unshift("Marathi");
console.log(book);

// we use pop() to remove element at the last. 
book.pop();
console.log(book);

// we use shift() to remove element at the first. 
book.shift();
console.log(book);

// we use splice() to remove element from array from any position or you can update any element. 
book.splice(2, 1);
console.log(book);

// we use splice() to remove element from array from any position or you can update any element. 
book.splice(2, 1, "Marathi"); // removed bio and insert marathi on same position.
console.log(book);


// remove all array elements from array. 
//  book = []; // this is first method to remove all elements from array.
// book.length = 0; // this is second  method to remove all elements from array.
//  console.log(book);


// to find the index no / Position of any perticular element.

 console.log("Index/Position of Bio:", book.indexOf("Marathi"));

 // we can check the name is variable or array using isArray() method.
// and responce will in boolean format true or false.

console.log("book is array??:", Array.isArray(book));

var book6 = "math";
 console.log("book is array??:", Array.isArray(book6));


 // we can convert the normal text variable into array using array.split(method).
 let text = "This is random text";

 let wordArray = text.split(' ');
 console.log(wordArray);

 // we can also join the array elements in normal text format.

 let normalText = book.join(', ');

 console.log(normalText);

 // we can also join two array using concat method.

 let book2 = ["Hindi", "English", "Spanish"];

 let book3 = book.concat(book2);
 console.log("Mearge multiple arrays using concat method:", book3);

 // Multidimentional Array means array of array.

 let freinds = [
    ["Suhas", 45000],
    ["Popat", 52000],
    ["Santosh", 48000],
    ["Pramod", 57000]
];

console.log(freinds); // print multidimentional array.
console.log(freinds[0]); // Print element from multidimentional array(Inner Array elements).
console.log(freinds[2][1]); // print perticular element from multidimentional array.

// Accessing array elements using for loop.

let books = ['Math', 'Physics', 'Marathi', 'Hindi', 'English', 'Spanish'];
console.log(`\n Printing books array one by one using for loop.`);
for (let i = 0; i < books.length; i++) {
    console.log(`Element ${i} is ${books[i]}.`);
}

// Accessing array elements using for each loop.

console.log("\nAccessing array elements using for each.");
books.forEach(myFunction);

function myFunction(value) {
    console.log(value);
}











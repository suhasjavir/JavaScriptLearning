var type = "suhas";
console.log(typeof type); // typeof operator is used the find the datatype of given variable.

var type = 32;
console.log(typeof type);

var type = true;
console.log(typeof type);

var type = "true"; // "true", "false", "32" etc...
console.log(typeof type); // If any value is enclosed in quotation and it's datatype will be string.

console.log(`Automatic type conversion`);

var type = 5 + null;
console.log(type); // 5
console.log(typeof type); // number 

var type = "5" + null;
console.log(type); // 5null
console.log(typeof type); // string 

var type = "5" + 2;
console.log(type); // 52
console.log(typeof type); // string 

var type = "5" - 2;
console.log(type); // 3
console.log(typeof type); // number

var type = "5" * "yes";
console.log(type); // NaN
console.log(typeof type); // number

// javascript provides some functions for the convert type manually. these are -->
// 1. String()
// 2. Number()
// 3. Boolean()

// whenever we recieve responce form user, responce type will be a "string" and we need to convert
// string in a number. we can conver the string value in number or boolean. some conversions performs 
// automatically and  to type conversion  we use some function    

console.log(`\ntype conversion functions provided by JavaScript:`);
var type = 4;
console.log("1) old Type:", typeof type);
var newType = String(type);
console.log("   new type:", typeof(newType));

var type = false;
console.log("2) old Type:", typeof type);
var newType = String(type);
console.log("   new type:", typeof(newType));

var type = "32";
console.log("3) old Type:", typeof type);
var newType = Number(type);
console.log("   new type:", typeof(newType));

var type = "hello";
console.log("4) old Type:", typeof type);
var newType = Number(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));

var type = true;
console.log("5) old Type:", typeof type);
var newType = Number(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));

var type = false;
console.log("6) old Type:", typeof type);
var newType = Number(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));

var type = 0;
console.log("7) old Type:", typeof type);
var newType = Boolean(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));

var type = 32; // except "0" all values are converted in true.
console.log("8) old Type:", typeof type);
var newType = Boolean(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));

var type = ""; // ""(empty string) are always converted in false.
console.log("9) old Type:", typeof type);
var newType = Boolean(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));

var type = "hello"; // except ""(empty string) all strings are always converted in true.
console.log("9) old Type:", typeof type);
var newType = Boolean(type);
console.log(`   ${newType}`);
console.log("   new type:", typeof(newType));
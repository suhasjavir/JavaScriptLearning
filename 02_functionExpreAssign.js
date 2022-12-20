var squareOfNum = function(val){
    var square = val * val;
    console.log(`The square of ${val}: ${square}`);
}
squareOfNum(5);
squareOfNum(6);
squareOfNum(25);
squareOfNum(100);
console.log(`Type of function is:  ${typeof squareOfNum}`);
console.log(`------------------------------`);
var areaOfRectangle = function(length, width){
var result = length * width;
return result;
}
var result = areaOfRectangle(499, 917);
console.log(`Area of Rectangle is: ${result}`);
console.log(`------------------------------`);
var swapValues = function(val1, val2){
    console.log(`values before swap: ${val1} ${val2}`);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log(`values after swap: ${val1} ${val2}`);
}
swapValues("virat", "anushka");
swapValues(1000, 2000);
console.log(`------------------------------`);
var string = function(){
    var str = "JS is the most popular language";
    console.log(`The given string is: ${str}`);
    console.log(`Total charcter available in string: ${str.length}`);
    console.log(`Character of index 6 is: ${str.charAt(6)}`);
    console.log(`Character og index 11 is" ${str.charAt(11)}`);
    var lengthtotal = str.length;
    console.log(`Character at the last aindex is: ${str.charAt(lengthtotal -1)}`);
    console.log(`First character in the given string is: ${str.charAt(0)}`);
    console.log(`length of the given string is: ${lengthtotal} & Square of the total character length is: ${lengthtotal * lengthtotal}`);
}
string();


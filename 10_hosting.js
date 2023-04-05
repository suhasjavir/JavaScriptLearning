console.log(city);
var city = "Pune";
console.log("----------------------------------");
let state = "MH";
console.log(state);
// let state = "MH"; //this is not hoisted, it throws error.
console.log("----------------------------------");
show();
function show(){
    console.log("Hello I am in show");
}
// display();  //this is not hoisted, it throws error.
// var display = function(){
//     console.log("Hello I am in display");
// }

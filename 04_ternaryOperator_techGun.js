// used in any application for log in log out
// using if else condition
/*let isLoggedin = 0; // "0" for logged out & "1" for login.
if (isLoggedin==1) {
    console.log("You are logged in.");
} else if (isLoggedin !== 0 && isLoggedin !== 1) {
    console.log("Please enter Valid input");
} else {
    console.log("You are logged out");
} */

let isLoggedin = 1; // "0" for logged out & "1" for login.

let option = isLoggedin == 1 ? "you are logged in" : "you are logged out";

console.log(option);
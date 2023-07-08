var leapYear = 2048;
debugger;
if (leapYear % 4 === 0) {
    if (leapYear % 100 === 0) {
        if (leapYear % 400 ===0) {
            console.log(`You entered ${leapYear} year and this is a leap year.`);
        } else {
            console.log(`You entered ${leapYear} year and this is not a leap year.`);
        }
    } else {
        console.log(`You entered ${leapYear} year and this is a leap year.`);
    }
} else {
    console.log(`You entered ${leapYear} year and this is not a leap year.`);
}

console.log(`----------------------------------------------------------------------`);

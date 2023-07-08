let x = new Date();
console.log(x);

console.log(`log time in milliseconds: "${x.getTime()}"`);

console.log(`log the current year: "${x.getFullYear()}"`);

console.log(`log the current Month: "${x.getMonth()}"`);
// it will return month no as array no. means it will return current month - 1, 
// current month is jun(6) and it will return jun(5).

console.log(`log the current date: "${x.getDate()}"`);

console.log(`log the current hours: "${x.getHours()}"`);

console.log(`log the current minute: "${x.getMinutes()}"`);

console.log(`log the current seconds: "${x.getSeconds()}"`);

console.log(`log the current day: "${x.getDay()}"`);

x.setFullYear("2020");

console.log(`log the current year: "${x}"`);

x.setDate(10);

console.log(`log the current year: "${x}"`);

console.log(`------------------------------------------------------`);

console.log(`WAP to print next 50 days date / future date.`);

let z = new Date();

console.log(z);

z.setDate(z.getDate() + 50)

console.log(`This is the 50 days after date / future date: "${z}"`);
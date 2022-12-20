console.log(`WAP to print numbers form 5 to 15 by incrementing 1.`);
for (let index = 5; index <= 15; index++) {
  console.log(index);
}
console.log(`WAP to print numbers form 50 to 40 by decrementing 1.`);
for (let index = 50; index >= 40; index--) {
  console.log(index);
}
console.log(`WAP to find first 15 odd numbers`);
for (let index = 1; index <= 30; index++) {
  if (index % 2 == 1) {
    console.log(`${index}`);
  }
}
console.log(`WAP to find first 15 Even numbers`);
for (let index = 1; index <= 30; index++) {
  if (index % 2 == 0) {
    console.log(`${index}`);
  }
}
console.log(`Printing table of 5`);
for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}
console.log(`Printing table of 10`);
for (let index = 10; index <= 100; index = index + 10) {
  console.log(index);
}
console.log(`Printing table of 10 in reverse order`);
for (let index = 100; index >= 10; index = index - 10) {
  console.log(index);
}

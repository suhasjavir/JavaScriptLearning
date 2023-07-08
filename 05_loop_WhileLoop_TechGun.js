// print your name 10 times using while loop.
let counter = 1;
while (counter <= 10) {
    console.log(counter, "Suhas Javir");
    counter = counter+2;    
}

// print the sum of even no from 1 to 100;

let no = 1;
sum = 0;
while (no <= 100) {
    if (no % 2 == 0) {
        sum += no;
    }
    no++;
}
console.log(`The sum of even numbers in 1 to 100 is: ${sum}`);

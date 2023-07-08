// if input = '1', 'y', 'yes' output = Continue.....
// if input = '0', 'n', 'no' Output = End.....

console.log("Using if else.");

let input = "ye";

if (input === 1 || input === 'y' || input === 'yes') {
    console.log(`"OutPut using if else" ::::  Continue....`);
} 
 
else if (input === 0 || input === 'n' || input === 'no') {
    console.log(`"OutPut using if else" ::::  End....`);
}  else {
    console.log(`"OutPut using if else" ::::  Wrong Input....`);
}

// switch case always comparision with "===".
console.log("\nUsing Switch Case.------------------------------------------------------\n");

switch (input) {
    case 1:
        // console.log(`"OutPut using Switch case" ::::  Continue....`);
        // break;
    case "y":
        // console.log(`"OutPut using Switch case" ::::  Continue....`);
        // break;
    case "yes":
        console.log(`"OutPut using Switch case" ::::  Continue....`);
        break;
    case 0:
        // console.log(`"OutPut using Switch case" ::::  End....`);
        // break;
    case "n":
        // console.log(`"OutPut using Switch case" ::::  End....`);
        // break;
    case "no":
        console.log(`"OutPut using Switch case" ::::  End....`);
        break;

    default:
        console.log(`"OutPut using Switch case" ::::  Wrong Input.... Please enter valid input....`);
        // break;
}
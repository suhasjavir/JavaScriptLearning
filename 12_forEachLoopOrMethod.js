const arrayNumbers= [10, 3, 4, 50, 6];
console.log(`==================1 log====================`);
arrayNumbers.forEach(function(currentValue, index, array){
 console.log(currentValue, index, array);
});
console.log(`==================2 log====================`);
arrayNumbers.forEach(function(currentValue){
    console.log(currentValue);
   });
   console.log(`==================3 log====================`);
arrayNumbers.forEach((currentValue)=>{
    console.log(currentValue);
});
console.log(`==================4 log====================`);
arrayNumbers.forEach(currentValue=>console.log(currentValue));

console.log("========5 log for Find even numbers==========");
const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
console.log(array);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
      console.log(currentValue);
    }
});

console.log("======== log 6 Find even numbers==========");
//const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
const arrayOfEven = [];
console.log(array);
array.forEach( (currentValue) => {
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
    }
});
console.log(`${arrayOfEven}`);
console.log("============= log 7 Array of even numbers=============");
//const array = [2, 3, 4, 5, 6, 7, 0, 34, 57];
console.log(arrayOfEven );
// Value and index
array.forEach( (currentValue, index, array )=>{
    console.log(currentValue, "index: ", index);
} );

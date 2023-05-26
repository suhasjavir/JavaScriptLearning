
// Int Que. Find the third smallest no without using sort method

let arr=[21,23,25,28, 24,27, 29, 74, 83, 96, 9, 10, 6, 12];
let sort;
for(let i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
    if(arr[i]>arr[j]){
      sort = arr[i];
      arr[i] = arr[j];
      arr[j] = sort;
    }
  }
}
console.log("Sorting array: ", arr);
console.log("\nThird smallest no is: ",arr[2]);
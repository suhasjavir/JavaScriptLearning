const response ={
    maran:{count : 1},
    gas: {count: 2 },
    prelude:{count: 5},
    keys: ['maran', 'gas', 'prelude']
}
let sum = 0;
response.keys.forEach(element => {
   sum += (response[element].count);
});
console.log(`sum of all count is: ${sum}`);
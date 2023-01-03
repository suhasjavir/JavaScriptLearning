const car = {
    car: "Creta SX",
    company: "Hundai",
    launchYear: 2017,
}

const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 BHP",    
}
console.log(`Given Object Car: `, car);
console.log(`Given Objects Car Engine : `, carEngine);
console.log(`1) merging objects by using "assing()":`);
let mergeResult = Object.assign(car, carEngine);

console.log(mergeResult);

console.log(`2) merging objects by using "Spread":`);
let mergeObject = {...car,...carEngine};
console.log(mergeObject);

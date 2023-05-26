let car = {
    brand: "Tata",
    color:"Black"
}
let vehicle = {...car};
console.log(car, vehicle);
vehicle.color="Red";
console.log(car, vehicle);



// use of this keyword in Object.

let person = {
    firstName: "Suhas",
    lastName: "Javir",
    sayHello(){
        console.log(`Hello world!!!!!!!!!!!!!!!!\n`);
        console.log(`My name is "${this.firstName} ${this.lastName}" and I have a "${car.brand} ${car.model}" car.`);
        
    }
};

let car = {
    brand: "Tata",
    model: "Safari"
}

person.sayHello();
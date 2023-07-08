
console.log(`This is normal method to create Object.`);
var student = {
    firstName: "Suhas",
    lastName: "Javir",
    age: 29,
    class: 10
}

console.log(student);

console.log(`----------------------------------------------------------------------`);

console.log(`Writing object using constructor function.`);

function stud(first, last, age, cls){   // This is constructor function.
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

var student1 = new stud("Suhas", "Javir", 32, 12);
var student2 = new stud("Popat", "Madane", 34, 11);
var student3 = new stud("Deepak", "Arjun", 29, 10);
let student4 = new stud("Sairaj", "Javir", 19, 13);
student3.firstName = "Santosh";
student2.firstName = "Niraj";
// student1.nationality = "Indian"; // we can add property in perticular object.
student1.name = function(){
    return this.firstName + " " + this.lastName;
}
console.log(student1.nationality);
console.log(student1.name());
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

stud.prototype.nationality = "Indian"; 
// property Nationality is added in constructor function "stud" by dinamically, using prototype property.
console.log(student2.nationality);
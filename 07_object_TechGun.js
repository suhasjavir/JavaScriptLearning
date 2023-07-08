
// Object.

let person = {
    firstName: "Suhas", // object properties.
    lastName: "Javir" // object properties.
};   // This is Object.

console.log(person.firstName, person.lastName);//this is first method to accessing the object.(Dot Notation)
console.log(`-------------`);
console.log(person['firstName'], person['lastName']);//This is second method to accessing Object.(Bracket Notation)
console.log(person);// we can access the whole object using the object name.

person.firstName = "Vaibhav"; // to update any object properties.
console.log(person.firstName);

person.age = 27; // to add new property in any object.
console.log(person);

delete person.lastName; // to delete any object properties.
console.log(person);

console.log('height' in person); 
// to check any properties available in object or not. and it will return the in boolean format(true or false)

person.lastName = "Javir";

// to accessing all object attribute, we use the for in loop.
// triversing the object using for in loop.
for(let key in person){
    console.log(key + ": " + person[key]);
}



console.log(`---------------------------------------------------------------------`);

console.log(`Object Practice`);

let student = {
    schoolName: "TMV",
    studName: "Suhas",
    rollNo: 161,
    }

    student.stream = "BCA";
    console.log(student);

    // check the stream key is available in the student object.
    console.log('stream' in student);

    // traversing the student object.
    for(let key in student){
        console.log(key + ": " + student[key]);
    }

    console.log(`-----------------------------Methods / Functions in Object-----------------------------------`);

    // wa can assign a function / method to object property.
    student.sayHello = function(){
        console.log(`Hello Suhas!!!!!!`);
    }
    // this sayhello is the property of student object and we assigned the anonymous function to the say hello.
    
    student.sayHello(); // calling the student object property.
    
    console.log(student);
    
    function greet(){
        console.log(`Hello Suhas "Good Morning"!!!!!!`);
    }
    
    student.goodmorning = greet;
    student.goodmorning();
    
    console.log(student);
    
    
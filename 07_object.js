// creating object with object litterals.
const datta = {
    "height":6, // key and value
    "weight": 70,
    "age": 23
  }
  
  const myLaptop ={
      OS: "Bug sur",
      companyName: "Apple",
      ram: "8GB",
      color: "Silver",
      processor: "M1 Processor"
  }
  
  const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    speak: function(){
        console.log(`Hey I can speak English and Hindi`);
      }
    
  }
  console.log(typeof person);
  console.log(person);
  console.log(`Accessing object properties using dot notation`);
  const personAge = person.age;
  console.log(`Person age is: ${personAge}`);
  console.log(`Accessing object properties using square bracket notation`);
  const personName = person["name"];
  console.log(personName);
  
  console.log(`=== Adding an property into an object====`);
  person.company = "Microsoft";
  console.log(person);
  
  console.log(`=== Updating an property into an object====`);
  person.age = 65;
  console.log(person);

  console.log(`=== Accessing an function from an object====`);
person.speak();

  
  console.log(`=== Deleting an property into an object====`);
  delete person.weight;
  console.log(person);


  console.log(`========== Creating an empty object==========`);
const mobile = {

}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);
console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
            return this.science+this.math+this.english;
         }
 
    },
    familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']
}
console.log(`==========Accessing an Nested object property==========`);
const scienceMarks =  student.marks.science;
console.log(scienceMarks);

console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);

console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

console.log(`Deleting an Nested object property`);
// delete student.marks.english;

console.log(`Accessing an Nested object function`);
const totalmarks = student.marks.add();
console.log(`${totalmarks}`);

console.log(`=============Accessing an array=============`);
console.log(student.familyMemberNames);


console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    company: "Microsoft",
    valuation: "130B $"
}
console.log(`========== in operator ================`);
 let isAvailable = "height" in billgates;
 
 if (isAvailable) {
    delete billgates.height;
    console.log(`"height" property is deleted successfully`);
 } else{
    console.log(`"height" property not deleted as it is available inside object`);
 }

// console.log(Object.entries(billgates));
// console.log(Object.keys(billgates));
// console.log(Object.values(billgates));
for (const key in billgates) {
  if (Object.hasOwnProperty.call(billgates, key)) {
    const element = billgates[key];
    console.log(element);
  }
}




var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" ");
console.log(joinResult);
console.log(typeof joinResult);
  
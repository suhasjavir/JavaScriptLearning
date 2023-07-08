// Nested Objects.

let user = {
    id: 76404,
    position: "Angular Developer",
    personalInfo: {
        name: "Suhas Javir",
        salary: 72000,
        contact: {
            mob: 9850691878,
            email: "suhas.javir9850@gmail.com"
        }
    }
}

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.contact);
console.log(user.personalInfo.contact.mob);

user.personalInfo.salary = 120000;

console.log(user.personalInfo.salary);
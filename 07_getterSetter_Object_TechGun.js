
// use of Getter and Setter in Object.

console.log(`Learning Getter Method.`);
let person = {
    name: "Suhas",
    age: 29,
    company: "Cybage",
    // getName: function(){
    //     return this.name.toUpperCase();
    // }
    get getName(){
        return this.name.toUpperCase();
    },

}
console.log(person);

// console.log(person.name.toUpperCase());
console.log(`this name is comming through getName method() (Getter): "${person.getName}"`);

console.log(`------------------------------------------------------------------------------`);

console.log(`Learning Set Method.`);

let person1 = {
    name: "Suhas",
    age: 29,
    company: "Cybage",
    set setName(n){
        this.name = n.toUpperCase();
    }
}; 
person1.setName = "suhas javir";
console.log(person1);

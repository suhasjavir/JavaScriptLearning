function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 let s1 = new Student("Vinny", 111, 23);
 console.log(s1.rollNo);
 let s2 = new Student("Jenny", 22, 35);
 console.log(s1);

 ///////////////////

 function Stud(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 Stud.prototype.country = "India";
 let vinny = new Student("Vinny", 111, 23);
 let jenny = new Student("Jenny", 44, 45);
 let minny = new Student("Minny", 55, 23);
 let tommy = new Student("Tommy", 66, 35);
 console.log(vinny);
 console.log(jenny);
 console.log(minny);
 console.log(tommy);
 console.log(`Vinayak : ${vinny.country}`);
 console.log(minny.country);
 console.log(jenny.country);
 console.log(tommy.country);

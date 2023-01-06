console.log(`=========================  Q 1.  ============================== `);
// class Vehicles {
//     constructor(vehicleType, company, launchingYear, vehicleName, chessiNo, ){
//         console.log(`Vehicle Type: ${vehicleType}, Company: ${company}, Year Of Launching: ${launchingYear}, Vehicle Name: ${vehicleName}, Chessi No: ${chessiNo} `);
       
//     }
// }
// const vehicleHero = new Vehicles("Two Wheelar", "Hero Honda", 1996, "Splender", 12345);
// const vehicleInnova = new Vehicles("Four Wheelar", "Toyota", 2021, "Innova Crysta", 678910);
// const vehicleMahindra = new Vehicles("Three Wheelar", "Mahindra", 2018, "Rikshaw", 132435);
// const vehicleBajaj = new Vehicles("Two Wheelar", "Bajaj", 2014, "Ktm", 654576);
// const vehicleChevoralate = new Vehicles("Four Wheelar", "Chevoralate", 2007, "Tavera", 9864368);

// you can write this program following logic also.

class Vehicles {
    constructor(vehicleType, company, launchingYear, vehicleName, chessiNo, ){
 this.vehicleType = vehicleType;
        this.company = company;
        this.launchingYear = launchingYear;
        this.vehicleName = vehicleName;
        this.chessiNo = chessiNo;
    }
}
const vehicleHero = new Vehicles("Two Wheelar", "Hero Honda", 1996, "Splender", 12345);
const vehicleInnova = new Vehicles("Four Wheelar", "Toyota", 2021, "Innova Crysta", 678910);
const vehicleMahindra = new Vehicles("Three Wheelar", "Mahindra", 2018, "Rikshaw", 132435);
const vehicleBajaj = new Vehicles("Two Wheelar", "Bajaj", 2014, "Ktm", 654576);
const vehicleChevoralate = new Vehicles("Four Wheelar", "Chevoralate", 2007, "Tavera", 9864368);
console.log(vehicleHero);
console.log(vehicleInnova);
console.log(vehicleMahindra);
console.log(vehicleBajaj);
console.log(vehicleChevoralate);

console.log(`=========================  Q 2.  ============================== `);
class College{
    constructor(collegeName, principleOfCollege, departments, location, university){
    this.collegeName = collegeName;
    this.principleOfCollege = principleOfCollege;
    this.departments = departments;
    this.location = location;
    this.university = university;
    }
}
const TilakMaharshtra = new College("Tilak Maharashtra Vidyapith", "Shkubhada Phadake", 23, "Pune", "Deemed Univercity"); 
const BharatiVidyapeeth = new College("Bharati Vidyapeeth", "Dattatray Khandekar", 16, "Pune", "Deemed Univercity");
const mahavirCollege = new College("Mahavir College", "Vikas Patil", 42, "Kolhapur", "Shivaji University" );
const wellingdonCollege = new College("Willingdon College", "Narayan Mhatre", 26, "Sangli", "Shivaji University")
console.log(TilakMaharshtra);
console.log(BharatiVidyapeeth);
console.log(mahavirCollege);
console.log(wellingdonCollege);
console.log(`=========================  Q 3.  ============================== `);
function traverseObject(collegeName) {
    for (const key in collegeName) {
        if (Object.hasOwnProperty.call(collegeName, key)) {
            const element = collegeName[key];
            console.log(`${key}: ${element}`);
        }
    }
    console.log(`---------------------------`);
}

traverseObject(TilakMaharshtra);
traverseObject(BharatiVidyapeeth);
traverseObject(TilakMaharshtra);
traverseObject(mahavirCollege);
traverseObject(wellingdonCollege);

const professor = {};
console.log(`1) Creating an empty Object as "Proffessor":`);
console.log(professor);
professor.profName = "Prafulla Kumbhar";
professor.age = 39;
professor.gender = "female";
professor.height = 5.5;
professor.city = "Pune";
console.log(`Adding all properties in Porfessor object:`);
console.log(professor);
professor.degrees = {
  engineering: "CSC",
  PHD: "ADV Computing",
  Award: "Best Teacher",
  add: function () {
    return this.engineering + this.PHD + this.Award;
  },
};
console.log(`2) adding nested Object "degrees":`);
console.log(professor.degrees);
professor.certificates = {
  certificate1: "Hacker Rank Participation",
  certificate2: "IFE Course",
  certificate3: "ADV Programming",
};
console.log(`3) adding one more nested Object "Certificates":`);
console.log(professor.certificates);
console.log(
  `5) adding new property to professor object: "Added married property"`
);
professor.ismarried = "Yes";
console.log(professor);
console.log(`6) Modify exesting property: "Age is modified".`);
professor.age = 42;
console.log(professor);
console.log(`7) Delete one certificate form nested object.`);
console.log(professor.certificates);
delete professor.certificates.certificate1;
console.log(`certificate1 is deleted from certificates object:`);
console.log(professor.certificates);
console.log(`8) add new certificate in nested object certificate.`);
professor.certificates.newCertificate = "CCC";
console.log(`9)Added new certificate "CCC" in certificate object:`);
console.log(professor.certificates);

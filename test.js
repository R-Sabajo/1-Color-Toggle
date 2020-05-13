const klas = [
  "Rama",
  "Ramsey",
  "Marcia",
  "Boudewijn",
  "Lesley",
  "Tamara",
  "Emma",
  "Cees",
];

// for (i = 0; )
// "\n"

// klas.forEach((student) => {
//   console.log(student + "\n");
// });

const namenLanger5 = klas.filter((student) => {
  return student.length > 5;
});

console.log(namenLanger5);

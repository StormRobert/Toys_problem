const prompt = require("prompt-sync")()
const marks = prompt("Enter student marks: ");

const marksNumber = Number(marks);
let grade;
if (marksNumber >= 80) {
    grade = "A";
  } else if (marksNumber >= 60) {
    grade = "B";
  } else if (marksNumber >= 50) {
    grade = "C";
  } else if (marksNumber >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  console.log (`grade: ${grade}`) ;


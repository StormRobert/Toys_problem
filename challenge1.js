const prompt = require("prompt-sync")()
//prompting for marks
const marks = prompt("Enter student marks: ");
const marksNumber = Number(marks);
let grade;
//if else conditions for getting the grade according to the marks
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
  //getting the grade result output once the marks are entered
  console.log (`grade: ${grade}`) ;


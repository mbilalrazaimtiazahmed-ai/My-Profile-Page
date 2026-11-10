var english = Number(prompt("Enter your English marks"));
var mathematics = Number(prompt("Enter your Mathematics marks"));
var physics = Number(prompt("Enter your Physics marks"));
var chemistry = Number(prompt("Enter your Chemistry marks"));
var computerScience = Number(prompt("Enter your Computer Science marks"));

var totalMarks = 500;
var obtainedMarks = english + mathematics + physics + chemistry + computerScience;
var percentage = obtainedMarks / totalMarks * 100;

var grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "Fail";
}

alert("Total Marks: " + totalMarks + "\nObtained Marks: " + obtainedMarks + "\nPercentage: " + percentage + "%" + "\nYour Grade: " + grade);
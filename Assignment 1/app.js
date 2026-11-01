var studentName = prompt("Enter Student Name");
var rollNumber = prompt("Enter Roll Number");
var studentClass = prompt("Enter Class");

var english = Number(prompt("English Marks:"));
var mathematics = Number(prompt("Mathematics Marks:"));
var physics = Number(prompt("Physics Marks:"));
var chemistry = Number(prompt("Chemistry Marks:"));
var computer = Number(prompt("Computer Science Marks:"));
var urdu = Number(prompt("Urdu Marks:"));
var islamiat = Number(prompt("Islamiat Marks:"));

var totalMarks = 700;
var obtainedMarks = english + mathematics + physics + chemistry + computer + urdu + islamiat;
var percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

document.write("<h1>Student Marksheet</h1>");
document.write("Name: " + studentName + "<br>");
document.write("Roll No: " + rollNumber + "<br>");
document.write("Class: " + studentClass + "<br><br>");
    
document.write("Total: " + totalMarks + "<br>");
document.write("Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");

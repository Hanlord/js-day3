var student = ["John","Jane"];
var points = [70,85];


student.push(prompt("Enter your Name:"));


var i;
        for (i = 0; i < 1; i++) {

points.push(Number(prompt("Enter your grades:" + (i + 1), "0-100")));
        }

console.log(student,points)

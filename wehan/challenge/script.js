var student = ["John","Jane"];
var points = [70,85];

// var result=prompt("type your name");
student.push(prompt("Enter your Name:"));


var i;
        for (i = 0; i < 1; i++) {
// var points=prompt("your score");
points.push(Number(prompt("Enter your grades:" + (i + 1), "0-100")));
        }

console.log(student,points)

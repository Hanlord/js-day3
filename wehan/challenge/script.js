var student = ["John","Jane"];
var points = [70,85];


student.push(prompt("Enter your Name:"));


var i;
        for (i = 0; i < 1; i++) {

points.push(Number(prompt("Enter your grades:" + (i + 1), "0-100")));
        }

console.log(student,points)
    
      function check(points) {
        if (points < 60) {
          return points.style.color=red;
        } else if (points <= 70) {
          return points.style.color=yellow;
        } else if (points > 70) {
          return points.style.color=green;
        } else if (points >=100) {
          return points.style.color=blue;
        } 
      }
      
document.write(student,points,check) //help!
      
      

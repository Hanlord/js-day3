var student = ["John","Jane"];
var points = [70,85];


student.push(prompt("Enter your Name:"));


var i;
        for (i = 0; i < 1; i++) {

points.push(Number(prompt("Enter your grades:" + (i + 1), "0-100")));
        }

console.log(student,points)
    
      function check(result) {
        if (result < 60) {
          return result.style.color=red;
        } else if (result <= 70) {
          return result.style.color=yellow;
        } else if (result > 70) {
          return result.style.color=green;
        } else if (result >=100) {
          return result.style.color=blue;
        } 
      }
      
      
      

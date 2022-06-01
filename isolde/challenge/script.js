const students = ["John", "Jane", "Mary", "Bob", "Bruce"];
const mathGrades = [70, 85, 30, 63, 100];

let studentsName = prompt("Type your name");

let yourGrade = document.querySelector("p");
yourGrade.style.fontSize = "80px";

for (let i = 0; i < students.length; i++) {
    if (students.includes(studentsName)) {
        let index = students.indexOf(studentsName)
        yourGrade.innerText = `${students[index]} has reached ${mathGrades[index]} points in Math this season.`;
        if (mathGrades[index] < 60) {
            yourGrade.style.backgroundColor = "red";
        } else if (mathGrades[index] < 70) {
            yourGrade.style.backgroundColor = "yellow";
        } else if (mathGrades[index] < 100) {
            yourGrade.style.backgroundColor = "green";
        } else if (mathGrades[index] == 100) {
            yourGrade.style.backgroundColor = "royalblue";
        } 
    } else {
        yourGrade.innerText = `Name not found. Please try again!`;
    }
}







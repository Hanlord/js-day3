function calcGrade(grade) {

    switch (true) {
        case grade < 60:
            title = "F";
            console.log(title);
            break;
        case grade < 70:
            title = "D";
            console.log(title);
            break;
        case grade < 80:
            title = "C";
            console.log(title);
            break;
        case grade < 90:
            title = "B";
            console.log(title);
            break;
        case grade < 100:
            title = "A";
            console.log(title);
            break;
    }

}

// could use return instead of console.log inside the switch statement

let Martin = 76,
    Thomas = 85,
    Klaus = 65,
    Maria = 93,
    David = 81;

const grades = [Martin, Thomas, Klaus, Maria, David];
const students = ["Martin", "Thomas", "Klaus", "Maria", "David"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    calcGrade(grades[i]) ;
    
}

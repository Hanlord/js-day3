


// function result(number){
    
    


//     switch(true){
//         case (number<60):
//         title="F";
//         break;
    
//         case (number<70):
//         title="D";
//         break;
    
//         case (number<80):
//         title="C";
//         break;
    
//         case (number<90):
//         title="B";
//         break;
    
//         case (number<100):
//         title="A";
//         break;
       
// }
// }
// let Martin = 76,
// Thomas = 85,
// Klaus = 65,
// Maria = 93,
// David = 81;
// const students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
// const grades = [Martin, Thomas, Klaus, Maria, David];

    
//     for (let i = 0; i < students.length; i++) {
//         console.log(students[i]);
//         gradesresult(number[i]) ;
// }
//     result()

let Martin = 76,
    Thomas = 85,
    Klaus = 65,
    Maria = 93,
    David = 81;

const grades = [Martin, Thomas, Klaus, Maria, David];
const students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let sum=0
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    calcGrade(grades[i]) ;
    sum +=grades[i]
    
}
var avarage=sum/students


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



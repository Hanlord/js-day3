function calcGrade(grade) {
let title;

    switch (true) {
        case grade < 60:
            title = "F";
            return title;
        case grade < 70:
            title = "D";
            return title;
        case grade < 80:
            title = "C";
            return title;
        case grade < 90:
            title = "B";
            return title;
        case grade < 100:
            title = "A";
            return title;
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
let sum = 0;


for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    console.log(calcGrade(grades[i]));

    sum += grades[i];
}
var averagePts = sum/students.length;
console.log(`Average points: ${averagePts}`);

console.warn(calcGrade(80))
console.log(`Average points is: ${averagePts} and average grade is ${calcGrade(averagePts)}`);



// fizzBuzz

for (let i = 1; i <= 100; i++) {
if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
} else if (i % 3 == 0) {
    console.log("Fizz");
} else if (i % 5 == 0) {
    console.log("Buzz");
} else {
    console.log(i);
}
}

// star loop
let stars = "";


for (let i = 0; i < 6; i++) {
    stars += "*";
    console.log(stars);
}

// variant using while loop

let dots = "";
let i = 0;

while (i < 6) {
    dots += "°";
    i++;
    console.log(dots);
}
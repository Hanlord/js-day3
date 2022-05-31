// ex 1 | Compare two numbers

// Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

// Martin = 76
// Thomas = 85
// Klaus = 65
// Maria = 93
// David = 81

// Based on their points, output the grade, according to the following table:

// < 60 F
// < 70 D
// < 80 C
// < 90 B
// < 100 A

// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).

let students = [
  ["Martin", 76],
  ["Thomas", 80],
  ["Klaus", 65],
  ["Maria", 93],
  ["David", 81],
];

function check(result) {
  if (result < 60) {
    return `F`;
  } else if (result < 70) {
    return `D`;
  } else if (result < 80) {
    return `C`;
  } else if (result < 90) {
    return `B`;
  } else if (result <= 100) return `A`;
}

for (let i = 0; i < students.length; i++) {
  console.log(
    `Dear student ${students[i][0]} you got ${
      students[i][1]
    } and it is a ${check(students[i][1])}`
  );
}
let sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i][1];
}

let average = sum / students.length;
console.log(
  `The average of students is ${average}. and it is a ${check(average)}`
);

let names = ["Acilio", "Delia", "Serri"];

for (let val of names) {
  let selector = document.getElementById("demo");
  selector.innerHTML += `
  <div class="col-lg-4 col-sm-6 col-xs-12">
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>`;
  selector.style.color = "red";
}

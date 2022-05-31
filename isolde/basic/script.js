//exercise 1

// function temp() {
// let temp = Math.floor(Math.random()*31)-5;
// console.log(temp);

// if (temp < 10) {
//     console.log("The weather is cold");
// } else {
//     console.log("The weather is moderate");
// }
// }

// temp();

function temp() {
    let temp = Math.floor(Math.random()*31)-5;
    console.log(temp + "c");
    
    if (temp < 10) {
        return "The weather is cold";
    } else {
        return "The weather is moderate";
    }
    }
    
    document.write(temp());

//exercise 2

const numbers = [1, 7, -3, 9];
console.log(Math.max(...numbers));
//... tells Math function that it is an array

//exercise 3





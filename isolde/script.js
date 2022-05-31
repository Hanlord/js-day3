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
    console.log(temp);
    
    if (temp < 10) {
        return "The weather is cold";
    } else {
        return "The weather is moderate";
    }
    }
    
    document.write(temp());


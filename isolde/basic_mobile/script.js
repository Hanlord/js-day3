function temp() {
    let temp = Math.floor(Math.random()*46)-5;
    console.log(temp + "c");
    let image = document.querySelector("img");
    image.setAttribute("style", "height: 50vh;")
    console.log(image);

    
    if (temp < 10) {
        image.setAttribute("src", "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
        // image.setAttribute("class", "opacity width");
        return `<br> ${temp}c <br> The weather is cold`;
    } else if ( temp < 32) {
        image.setAttribute("src", "https://images.unsplash.com/photo-1583878594798-c31409c8ab4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
        return `<br> ${temp}c <br> The weather is moderate`;
    }
    else {
        image.setAttribute("src", "https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
        return `<br> ${temp}c <br> The weather is hot`;
    }
    }
    
    document.write(temp());

// function temp2() {
// let temp = Math.floor(Math.random()*46)-5;

// switch (true) {
//     case (temp < 10):
//         message = "The weather is cold";
//         console.log(message);
//         break;
//     case (temp < 32):
//         message = "The weather is moderate";
//         console.log(message);
//         break;
//     case (temp > 32):
//         message = "The weather is hot";
//         console.log(message);
//         break;

//     default: console.log("error");
//         break;
// }
// };

// temp2();
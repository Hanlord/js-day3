// function temp(){
//     let random = Math.floor(Math.random()*46)-5;
//     console.log(random)
//     if(random<10){
//         let selector = document.getElementByClassName("img")
//         console.log("The Weather is cold")
//     }else{
//         console.log("The Weather is moderate")
//     }if(random>32){
//         console.log("The Weather is hot")
//     }
    
    
// }
// temp()


function temp(){
    var random = Math.floor(Math.random()*46)-5;
    console.log(random);
    let image=document.querySelector(".imgweather")

switch (true){
    case (random<10):
        title= "cold";
     image.setAttribute("src","snow.jpg");
        console.log(title);
        break;


    case (random<32):
        title= "moderate";
    image.setAttribute("src","moderate.jpg",)
        console.log(title);
        break;


    case (random>32):
        title= "hot";
        image.setAttribute("src","hot.jpg")
        console.log(title);
        break;
}
}
temp()




function temp(){
    var random = Math.floor(Math.random()*46)-5;
    console.log(random);
    let image=document.querySelector(".imgweather")
    let weather=document.querySelector("#weather")

switch (true){
    case (random<10):
        title= "cold";
        image.src ="snow.jpg";
        weather.style.color="blue";
        document.write(title,random);
        // return `<br> ${temp}c <br> The weather is cold`;
        break;


    case (random<32):
        title= "moderate";
        image.src ="moderate.jpg"
        weather.style.color="green";
        console.log(title);
        break;


    case (random>32):
        title= "hot";
        image.src="hot.jpg"
        weather.style.color="red";
        console.log(title);
        break;
}
}
temp()



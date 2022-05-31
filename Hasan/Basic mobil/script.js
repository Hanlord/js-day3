// ex 3 | Temperature v2.0
// Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.

function temp(
  text1 = "The wheater is cold",
  text2 = "The weather is moderate",
  text3 = "The weather is hot"
) {
  let randoTemp = Math.floor(Math.random() * 40) - 6;
  console.log(randoTemp);
  //   console.log("1st run ended");

  if (randoTemp < 10) {
    return [text1, randoTemp];
  } else if (randoTemp < 32) {
    return [text2, randoTemp];
  } else {
    return [text3, randoTemp];
  }
}
console.log(temp());
// console.log(temp("es ist kalt", "es ist warm"));

let itemOne = document.getElementById("weatherStatus");

itemOne.innerHTML = temp()[0] + " and the temp is " + temp()[1] + ".";

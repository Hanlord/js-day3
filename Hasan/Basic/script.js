// ex 1 | Temperature v1.0
// Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate".

// Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) .

function temp(text1 = "it's cold", text2 = "it's warm") {
  let randoTemp = Math.floor(Math.random() * 31) - 6;
  console.log(randoTemp);
  //   console.log("1st run ended");

  if (randoTemp < 10) {
    return text1;
  } else {
    return text2;
  }
}
console.log(temp());
// console.log(temp("es ist kalt", "es ist warm"));

console.log("FIRST exercise ended");
// ex 2 | Highest value in an array
// Create a program to find the highest value in an array.

// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

const arrayValue = [1, 7, -3, 9];
console.log(Math.max(...arrayValue));
console.log("Ex 2 Version 1");
const maxNumber = Math.max(...arrayValue);
console.log(maxNumber);
console.log("Ex 2 Version 2");

console.log("SECOND exercise ended");
// ex 3 | Temperature v2.0
// Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.

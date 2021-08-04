var _lodash = require('lodash');

var array = [1,2,3,4,5];
console.log('answer', _lodash.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeBackgroundColor(){
    body.style.background = 
    "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

console.log(css);
console.log(color1);
console.log(color2);

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);
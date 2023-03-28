/** @format */

let slider = document.querySelector(".slider");
let circle = document.querySelector(".slider span");
let body = document.querySelector("body");

slider.addEventListener("click", () => {
  circle.classList.toggle("active");
  body.classList.toggle("light-theme");
});

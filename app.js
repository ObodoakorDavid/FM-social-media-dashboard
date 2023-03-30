/** @format */

let slider = document.querySelector(".slider");
let circle = document.querySelector(".slider span");
let body = document.querySelector("body");

let darkMode = localStorage.getItem("dark-mode") || null;

if (darkMode) {
  circle.classList.remove("active");
  body.classList.remove("light-theme");
} else {
  circle.classList.add("active");
  body.classList.add("light-theme");
}

slider.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    circle.classList.remove("active");
    body.classList.remove("light-theme");
    localStorage.setItem("dark-mode", true);
  } else {
    circle.classList.add("active");
    body.classList.add("light-theme");
    localStorage.removeItem("dark-mode");
  }
});

/*const myButton = document.querySelector(".button")

function sayHello() {
  console.log("No to Hello!")
}

myButton.addEventListener("click", sayHello);*/
const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function toggleMenu() {
  nav.classList.toggle("nav-mobile");
  button.classList.toggle("open");

  if (button.classList.contains("open")) {
    button.innerHTML = "X";
  } else {
    button.classList.remove("open");
  }
}

button.addEventListener("click", toggleMenu);

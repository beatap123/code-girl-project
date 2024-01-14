const myButton = document.querySelector(".button")

function sayHello() {
  console.log("No to Hello!")
}

myButton.addEventListener("click", sayHello);

const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function mobileMenu() {
    if (window.innerWidth <= 800) {
        nav.classList.add("nav-mobile");
        button.classList.add("menu-button-open");
        button.innerHTML = "X";
    } else {
        nav.classList.remove("nav-mobile");
        button.classList.remove("menu-button-open");
        button.innerHTML = "menu";
    }
}

/*function toggleMenu() {
  nav.classList.toggle("nav-mobile");
  button.classList.toggle("menu-button-open");

  if (button.classList.contains("menu-button-open")) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "menu";
  }
}*/

button.addEventListener("click", mobileMenu);
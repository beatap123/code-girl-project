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
      button.innerHTML = "X"; // Change this to whatever you want the button to display when the menu is open
    } else {
      button.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 5h16v2h-16v-2zm0 6h16v2h-16v-2zm0 6h16v2h-16v-2z"/></svg>`; // Replace this with your desired SVG
    }
  }

button.addEventListener("click", toggleMenu);

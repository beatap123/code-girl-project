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
      button.innerHTML = `<svg width="52px" height="52px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M3 5H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`; // Replace this with your desired SVG
    }
  }

button.addEventListener("click", toggleMenu);

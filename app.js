const menuBars = document.getElementById("menu-bars");
const menu = document.querySelector(".overlay");

function toggleNav() {
  menuBars.classList.toggle("change");
  menu.classList.toggle("show");
}

menuBars.addEventListener("click", toggleNav);

/*let footer = document.getElementById("footer");
let stikie = footer.offsetTop;

console.log(stikie);

function myFunction() {
  if (window.pageXOffset >= stikie) {
    footer.classList.add("sticky");
  } else {
    footer.classList.remove("sticky");
  }
}*/

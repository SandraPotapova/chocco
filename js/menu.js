const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", (e) =>{
  if (hamburger.classList.contains("hamburger--active")) {
    hamburger.classList.remove("hamburger--active");
    menu.classList.remove("menu--active");
  } else {
    hamburger.classList.add("hamburger--active");
    menu.classList.add("menu--active");
  }
})
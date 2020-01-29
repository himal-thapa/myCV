menuBtn = document.querySelector(".menu-btn");
menu = document.querySelector(".menu");
menuBranding = document.querySelector(".menu-branding");
menuNav = document.querySelector(".menu-nav");
navItem = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", menuToggle);
function menuToggle() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

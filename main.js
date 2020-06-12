

const menuBTN = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

menuBTN.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
});
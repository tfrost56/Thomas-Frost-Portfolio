

const menuBTN = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

menuBTN.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
});


let text = document.querySelector(".intro__sub-header");
let textContent = text.getElementsByTagName("span");

let i = 0;

function rotator () {
    textContent[i].style.display = 'none';
    i = (i + 1) % textContent.length; 
    textContent[i].style.display = 'initial';
}
setInterval (rotator, 2000);
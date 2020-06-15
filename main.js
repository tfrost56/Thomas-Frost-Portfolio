

const menuBTN = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

menuBTN.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
});


var text = document.querySelector(".intro__sub-header");
var textContent = text.getElementsByTagName("span");

var i = 0;

function rotator () {
    textContent[i].style.display = 'none';
    i = (i + 1) % textContent.length; 
    textContent[i].style.display = 'initial';
}
setInterval (rotator, 2000);
let nav = document.querySelector("header");
let navImg = document.querySelector("header img");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 90) {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.50)";
        navImg.style.width = "140px";
    } else {
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.20)";
        navImg.style.width = "221.871px";
    }
}
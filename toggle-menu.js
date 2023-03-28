function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.toggle("active");
    var navLinks = document.querySelector(".nav__links");
    navLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function (event) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById("width").textContent = "Width: " + width;
});

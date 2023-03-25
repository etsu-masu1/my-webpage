function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
    var menuIcon = document.querySelector(".menu-icon");
    menuIcon.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function (event) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById("width").textContent = "Width: " + width;
});

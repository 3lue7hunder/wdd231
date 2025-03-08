document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav"); // Target the nav itself

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });
});

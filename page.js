/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   CURRENT YEAR IN FOOTER
========================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================================
   HEADER SHADOW WHEN SCROLLING
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});
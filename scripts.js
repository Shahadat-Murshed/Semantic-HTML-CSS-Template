//* ***Toggle Hamburger Menu***

document.getElementById("menu-toggle").addEventListener("click", function (event) {
    event.preventDefault();

    let menuToggle = document.getElementById("menu-toggle");
    let navLinks = document.getElementById("nav-links");
    let ariaExpanded = menuToggle.getAttribute("aria-expanded");

    navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", ariaExpanded === "true" ? "false" : "true");
});

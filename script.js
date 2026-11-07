
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Close menu after clicking a link
document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// Highlight active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#nav a");

window.addEventListener("scroll", () => {
    let current = "home";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 160) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});

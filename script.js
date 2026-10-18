
// 1. MOBILE NAVIGATION MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// 2. REVEAL SECTIONS WHILE SCROLLING
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

// 3. ROTATING INTRODUCTION
const typingElement = document.getElementById("typing");

const titles = [
    "Aspiring Developer",
    "Creative Learner",
    "Future Web Developer"
];

let titleIndex = 0;

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        typingElement.textContent = titles[titleIndex];
    }, 2500);
}

// 4. AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

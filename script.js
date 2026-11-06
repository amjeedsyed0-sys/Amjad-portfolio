
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ==============================
// AUTOMATIC COPYRIGHT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();

// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Open the browser's print dialog so visitors can save a CV as a PDF.
document.getElementById("downloadCV").addEventListener("click", () => {
    window.print();
});

// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navigationLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") ===
                    "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });

        }

    });

}, {
    threshold: 0.25
});

sections.forEach(section => {
    observer.observe(section);
});

// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
    "Welcome to Amjeed Syed's Portfolio Website!"
);
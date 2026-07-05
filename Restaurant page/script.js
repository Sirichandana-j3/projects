// =====================
// Navigation Menu
// =====================
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}

// =====================
// Sticky Header
// =====================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// =====================
// Change Main Food Image
// =====================
const mainImage = document.querySelector("#mainFood");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {

        if (mainImage) {
            mainImage.src = thumb.src;
        }

        thumbs.forEach(img => img.classList.remove("active"));
        thumb.classList.add("active");
    });
});

// =====================
// Auto Image Slider
// =====================
const images = [
    "images/food1.png",
    "images/food2.png",
    "images/food3.png",
    "images/food4.png"
];

let current = 0;

function autoSlide() {

    if (!mainImage) return;

    current++;

    if (current >= images.length) {
        current = 0;
    }

    mainImage.src = images[current];

    thumbs.forEach((img, index) => {
        img.classList.remove("active");

        if (index === current) {
            img.classList.add("active");
        }
    });
}

setInterval(autoSlide, 3000);

// =====================
// Smooth Scrolling
// =====================
document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

        navbar.classList.remove("active");
    });

});

// =====================
// Search Icon
// =====================
const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        const text = prompt("Search Menu");

        if (text) {
            alert("Searching for: " + text);
        }

    });

}

// =====================
// Button Animation
// =====================
const orderBtn = document.querySelector(".order-btn");

if (orderBtn) {

    orderBtn.addEventListener("click", () => {

        orderBtn.innerHTML = "Loading...";

        setTimeout(() => {

            orderBtn.innerHTML = "Check out Menu";

        }, 1000);

    });

}

// =====================
// Reveal Animation
// =====================
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});

// =====================
// Close Menu On Resize
// =====================
window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navbar.classList.remove("active");

    }

});
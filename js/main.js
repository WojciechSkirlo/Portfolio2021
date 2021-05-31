// SCROLL TO TOP
const scrollToTop = document.querySelector("#scroll-to-top");
const nav = document.querySelector("#main-nav");
const myName = document.querySelector("#name");
document.addEventListener("scroll", function () {
    let distance = window.pageYOffset;
    if (distance > 550) {
        scrollToTop.classList.remove("hidden");
    } else {
        scrollToTop.classList.add("hidden");
    }

    if (distance > 50) {
        nav.classList.add("newcolor");
        myName.classList.add("changecolor");
    } else {
        nav.classList.remove("newcolor");
        myName.classList.remove("changecolor");
    }
})

// LOADER
window.addEventListener("load", function () {
    const loader = document.querySelector("#loader");
    const h1 = document.querySelector(".wrapper-introduction");
    loader.classList.add("hidden");
    document.body.classList.remove("hidden-o");
    h1.classList.add("animation-move");
});

// MOBILE MENU
const navHamburger = document.querySelector("#mobile-nav-hamburger");
const belt1 = document.querySelector("#belt-1");
const belt2 = document.querySelector("#belt-2");
const navMobile = document.querySelector("#mobile-nav");
const darker = document.querySelector("#darker");
navHamburger.addEventListener("click", function () {
    belt1.classList.toggle("rotate-up");
    belt2.classList.toggle("rotate-down");
    navMobile.classList.toggle("hidden");
    darker.classList.toggle("hidden");
})

darker.addEventListener("click", function () {
    belt1.classList.toggle("rotate-up");
    belt2.classList.toggle("rotate-down");
    navMobile.classList.toggle("hidden");
    darker.classList.toggle("hidden");
})

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener("resize", function () {
    if (window.innerWidth > 1100) {
        belt1.classList.remove("rotate-up");
        belt2.classList.remove("rotate-down");
        navMobile.classList.add("hidden");
        darker.classList.add("hidden");
    }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

const menuMobile = document.querySelectorAll(".menu-mobile");

menuMobile.forEach(element => {
    element.addEventListener("click", function () {
        belt1.classList.toggle("rotate-up");
        belt2.classList.toggle("rotate-down");
        navMobile.classList.toggle("hidden");
        darker.classList.toggle("hidden");
    })
});

// Scroll Animation
window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768) {
        let distanceTop = window.pageYOffset;
        let distanceElementsTop = document.querySelectorAll(".work");
        distanceElementsTop.forEach(element => {
            if (((distanceTop + 300) > element.offsetTop) && ((distanceTop - 100) < element.offsetTop)) {
                element.classList.add("show");
            } else {
                element.classList.remove("show");
            }
        })
    }
})
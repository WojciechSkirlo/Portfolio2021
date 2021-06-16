// SCROLL TO TOP
const scrollToTop = document.querySelector("#scroll-to-top");
const nav = document.querySelector("#main-nav");
const myName = document.querySelector("#name");
document.addEventListener("scroll", function () {
    let s = scrollToTop.style;
    let distance = window.pageYOffset;
    if (distance >= 500) {
        scrollToTop.classList.remove("hidden");
        s.opacity = 0;
        show(s);
    } else {
        scrollToTop.classList.add("hidden");
        s.opacity = 0.8;
        hide(s);
    }

    function show(s) {
        s.opacity = 0.8;
    }

    function hide(s) {
        s.opacity = 0;
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


let noHover = [...document.querySelectorAll(".work")];

function hideAndShowElement() {
    let infoPortfolio = document.querySelector(".portfolio-wrapper p span").textContent;
    if (window.innerWidth <= 1100) {
        noHover.forEach(item => {
            item.classList.add("no-hover");
        })
        let desInThePicOld = "";
        let desInThePicNew = "";
        let indexOld = undefined;
        for (let i = 0; i < noHover.length; i++) {
            noHover[i].addEventListener("click", (e) => {
                e.stopPropagation();
                desInThePicNew = noHover[i].childNodes[1].getAttribute("alt");
                if (desInThePicNew !== desInThePicOld && indexOld != undefined) {
                    noHover[i].classList.toggle("show");
                    noHover[indexOld].classList.remove("show");
                } else {
                    noHover[i].classList.toggle("show");
                }
                desInThePicOld = noHover[i].childNodes[1].getAttribute("alt");
                indexOld = i;
            })
        }
        window.addEventListener("click", function (e) {
            for (let i = 0; i < noHover.length; i++) {
                noHover[i].classList.remove("show");
            }
        })
        let infoPortfolioTab = infoPortfolio.split(" ").map(item => item === "Najedź" ? item = "Kliknij" : item).join(" ");
        document.querySelector(".portfolio-wrapper p span").textContent = infoPortfolioTab;

    } else {
        noHover.forEach(item => {
            item.classList.remove("no-hover");
            item.classList.remove("show");
        })

        let infoPortfolioTab = infoPortfolio.split(" ").map(item => item === "Kliknij" ? item = "Najedź" : item).join(" ");
        document.querySelector(".portfolio-wrapper p span").textContent = infoPortfolioTab;
    }
}
hideAndShowElement();

function hideElements() {
    let infoPortfolio = document.querySelector(".portfolio-wrapper p span").textContent;
    if (window.innerWidth <= 1100) {
        noHover.forEach(item => {
            item.classList.add("no-hover");
        })

        let infoPortfolioTab = infoPortfolio.split(" ").map(item => item === "Najedź" ? item = "Kliknij" : item).join(" ");
        document.querySelector(".portfolio-wrapper p span").textContent = infoPortfolioTab;

    } else {
        noHover.forEach(item => {
            item.classList.remove("no-hover");
            item.classList.remove("show");
        })

        let infoPortfolioTab = infoPortfolio.split(" ").map(item => item === "Kliknij" ? item = "Najedź" : item).join(" ");
        document.querySelector(".portfolio-wrapper p span").textContent = infoPortfolioTab;
    }
}

window.addEventListener("resize", hideElements);
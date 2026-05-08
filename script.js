/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.padding = "18px 8%";

    } else {

        navbar.style.background = "rgba(0,0,0,0.35)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.padding = "25px 8%";

    }

});



/* ========================= */
/* CARDS APPEAR ANIMATION */
/* ========================= */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


cards.forEach(card => {
    observer.observe(card);
});



/* ========================= */
/* MOBILE FLIP */
/* ========================= */

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});
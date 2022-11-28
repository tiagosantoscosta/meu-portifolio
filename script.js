"use strict";

function typeWriter(el) {
    const textArray = el.innerHTML.split("");
    el.innerHTML = "";

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter),130 * i);
    });   
}
typeWriter(elementEl)






 // efeitos de animação
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll () {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

window.addEventListener('scroll', function () {
    animeScroll();
})




// botao de volta ao topo
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
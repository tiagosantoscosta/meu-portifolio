"use strict";

function typeWriter(el) {
    const textArray = el.innerHTML.split("");
    el.innerHTML = "";

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter),130 * i);
    });   
}
typeWriter(elementEl)





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
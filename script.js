"use strict";

function typeWriter(el) {
    const textArray = el.innerHTML.split("");
    el.innerHTML = "";

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter),130 * i);
    });   
}
typeWriter(elementEl)



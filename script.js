"use strict";

function typeWriter(el) {
    const textArray = el.innerHTML.split("");
    el.innerHTML = "";

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter),95 * i);
    });
    
}

typeWriter(elementEl)


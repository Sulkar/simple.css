

import "./simple.css";

const ce_hamburger = document.querySelector(".ce_hamburger");
ce_hamburger.onclick = function () {
    const ce_nav = document.querySelector(".ce_nav");
    if (ce_nav.className === "ce_nav") {
        ce_nav.className += " ce_open";
        ce_hamburger.innerHTML = "X";
    } else {
        ce_nav.className = "ce_nav";
        ce_hamburger.innerHTML = "...";
    }
}
console.log("in")
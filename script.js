const navEl = document.querySelector(".navigation");
const overlayEl = document.querySelector(".overlay");
const menuEl = document.querySelector(".menu-btn");

menuEl.addEventListener("click", () => {
    menuEl.classList.toggle("show");
    navEl.classList.toggle("show");
    overlayEl.classList.toggle("show");
})
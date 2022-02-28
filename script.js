let mobileNav = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close-btn");
let hamburger = document.querySelector(".menu-icon");

hamburger.addEventListener("click", () => {
  mobileNav.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

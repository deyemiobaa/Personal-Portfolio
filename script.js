// Mobile menu overlay
const mobileNav = document.querySelector('#mobile-menu-navigation');
const mobileNavMenu = document.querySelector('.overlay-content');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.menu-icon');
const linkIds = Array.from(document.querySelectorAll('.page-link'));

const docBody = document.querySelector(".project-popup-window");
const projectButtons = Array.from(document.querySelectorAll(".works"));
const popupContainer = document.querySelector("project-popup-window");
const wrapper = document.getElementById("wrapper");
const body = document.getElementById("page-body");

hamburger.addEventListener('click', () => {
  mobileNavMenu.style.display = 'block';
  mobileNav.style.width = '100%';
});

closeBtn.addEventListener('click', () => {
  mobileNavMenu.style.display = 'none';
  mobileNav.style.width = '0%';
});

linkIds.forEach(
  (linkId) => linkId.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    mobileNav.style.width = '0%';
  }),
);
// End of mobile menu overlay

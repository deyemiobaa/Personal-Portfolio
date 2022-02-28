const mobileNav = document.querySelector('#mobile-menu-navigation');
const mobileNavMenu = document.querySelector('.overlay-content');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.menu-icon');

hamburger.addEventListener('click', () => {
  mobileNavMenu.style.display = 'block';
  mobileNav.style.width = '100%';
});

closeBtn.addEventListener('click', () => {
  mobileNavMenu.style.display = 'none';
  mobileNav.style.width = '0%';
});

const linkIds = Array.from(document.querySelectorAll('.page-link'));

linkIds.forEach(
  (linkId) => linkId.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    mobileNav.style.width = '0%';
  }),
);

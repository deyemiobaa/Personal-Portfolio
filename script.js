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
const projects = [
  {
    name: "Keeping track of hundreds of components",
    image: "assets/images/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://deyemiobaa.github.io/Personal-Portfolio/",
    source: "https://github.com/deyemiobaa/Personal-Portfolio/",
  },
  {
    name: "Keeping track of hundreds of components",
    image: "assets/images/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://deyemiobaa.github.io/Personal-Portfolio/",
    source: "https://github.com/deyemiobaa/Personal-Portfolio/",
  },
  {
    name: "Keeping track of hundreds of components",
    image: "assets/images/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://deyemiobaa.github.io/Personal-Portfolio/",
    source: "https://github.com/deyemiobaa/Personal-Portfolio/",
  },
  {
    name: "Keeping track of hundreds of components",
    image: "assets/images/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://deyemiobaa.github.io/Personal-Portfolio/",
    source: "https://github.com/deyemiobaa/Personal-Portfolio/",
  },
  {
    name: "Keeping track of hundreds of components",
    image: "assets/images/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://deyemiobaa.github.io/Personal-Portfolio/",
    source: "https://github.com/deyemiobaa/Personal-Portfolio/",
  },
  {
    name: "Keeping track of hundreds of components",
    image: "assets/images/Snapshoot-Portfolio.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    live: "https://deyemiobaa.github.io/Personal-Portfolio/",
    source: "https://github.com/deyemiobaa/Personal-Portfolio/",
  },
];

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

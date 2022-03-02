// Mobile menu overlay
const mobileNav = document.querySelector('#mobile-menu-navigation');
const mobileNavMenu = document.querySelector('.overlay-content');
const closeBtn = document.querySelector('.close-btn');
const hamburger = document.querySelector('.menu-icon');
const linkIds = Array.from(document.querySelectorAll('.page-link'));

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

// Project popup window
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

// Create all project pop-up and store them in an array
let projectContent = []

const createProjectContent = projectArray => {
  for (let project = 0; project < projectArray.length; project++) {
    projectContent.push(
      `<div class="pop-up-overlay">
         <span class="close" onclick="closeNav()"><img src="assets/images/Disabled.svg" alt=""></span>
         <div class="pop-up-overlay-image">
           <img class="pop-up-overlay-image" src="${projectArray[project].image}" alt="">
         </div>
         <div class="pop-up-overlay-content">
           <div class="buttons-container">
             <ul class="button-items">
               <li><a href="${projectArray[project].live}">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></i></a></li>
               <li><a href="${projectArray[project].source}">See Source <i class="fa-brands fa-github"></i></a></li>
             </ul>
           </div>
           <h2>${projectArray[project].name}</h2>
           <ul class="lang-tags">
             ${projectArray[project].technologies.map((tech) => (`<li class="tag">${tech}</li>`)).join('')}
           </ul>
           <p>${projectArray[project].description}</p>
         </div>
    </div>
      `
    )
  }
}
createProjectContent(projects)

// Loop through eah button and match it to its content
// Populate the HTML file with the content
for (let button = 0; button < projectButtons.length; button++) {
  for (let content = 0; content < projectContent.length; content++) {
    projectButtons[button].addEventListener('click', () => {
      docBody.innerHTML = projectContent[content]
      wrapper.classList.add('blur')
      body.classList.add('color')
    });
  }
}

// when triggered overwrite the HTML content and make it empty
function closeNav() {
  docBody.innerHTML = ''
  wrapper.classList.remove('blur')
  body.classList.remove('color')
}

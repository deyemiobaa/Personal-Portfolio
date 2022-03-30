const wrapper = document.getElementById('wrapper');
const body = document.getElementById('page-body');
const recentWorks = document.querySelector('.recent-works-cards');
const modalbody = document.querySelector('.project-popup-window');
const projectImage = document.querySelector('.pop-up-overlay-image');
const projectTitle = document.querySelector('.project-title');
const projectTechnologies = document.querySelector('.lang-tags');
const projectDescription = document.querySelector('.description');
const liveLink = document.querySelector('.live-view');
const sourceCode = document.querySelector('.source-code');
const closeProject = document.querySelector('.close');
const previousButton = document.querySelector('.prevProject');
const nextButton = document.querySelector('.nextProject');
const projectsData = [
  {
    id: 0,
    name: 'To Do List',
    image: 'assets/images/projects/todolist.svg',
    description:
      "A web app that helps you keep track of your most important tasks. You can add, delete, edits tasks as you wish, and they always stay on your browser. It's a simple and easy to use app.",
    technologies: ['JavaScript', 'HTML/CSS', 'Webpack'],
    live: 'https://deyemiobaa.github.io/ToDo-List/',
    source: 'https://github.com/deyemiobaa/ToDo-List'
  },
  {
    id: 1,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description:
      "I'm learning and working hard to build amazing projects. Expect something new soon. In the mean time check out my other small  projects on GitHub.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/'
  },
  {
    id: 2,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description:
      "I'm learning and working hard to build amazing projects. Expect something new soon. In the mean time check out my other small  projects on GitHub.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/'
  },
  {
    id: 3,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description:
      "I'm learning and working hard to build amazing projects. Expect something new soon. In the mean time check out my other small  projects on GitHub.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/'
  },
  {
    id: 4,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description:
      "I'm learning and working hard to build amazing projects. Expect something new soon. In the mean time check out my other small  projects on GitHub.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/'
  },
  {
    id: 5,
    name: 'Project under construction',
    image: 'assets/images/projects/default.svg',
    description:
      "I'm learning and working hard to build amazing projects. Expect something new soon. In the mean time check out my other small  projects on GitHub.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/'
  },
];

projectsData.forEach((project) => {
  recentWorks.innerHTML
    += `
    <div class="works work${project.id}">
      <div class="work-details">
        <h3>${project.name}</h3>
        <ul class="language-tags">
          ${project.technologies.map((tech) => (`<li>${tech}</li>`)).join('')}
        </ul>
        <button id="${project.id}" class="works-button">See Project</button>
      </div>
    </div> `;
});

function disablePreviousOrNextButton() {
  if (previousButton.id <= 0) {
    previousButton.style.visibility = 'hidden';
  } else if (nextButton.id >= projectsData.length - 1) {
    nextButton.style.visibility = 'hidden';
  } else {
    previousButton.style.visibility = 'visible';
    nextButton.style.visibility = 'visible';
  }
}
function populatePopup(object) {
  projectImage.src = projectsData[object].image;
  projectTitle.textContent = projectsData[object].name;
  projectTechnologies.innerHTML = projectsData[object].technologies.map((tech) => (`<li>${tech}</li>`)).join('');
  projectDescription.textContent = projectsData[object].description;
  liveLink.href = projectsData[object].live;
  sourceCode.href = projectsData[object].source;
  previousButton.id = projectsData[object].id;
  nextButton.id = projectsData[object].id;
  wrapper.classList.add('blur');
  body.classList.add('color');
  disablePreviousOrNextButton();
}

function closePopup(closeButton) {
  closeButton.addEventListener('click', () => {
    modalbody.style.display = 'none';
    wrapper.classList.remove('blur');
    body.classList.remove('color');
  });
}
closePopup(closeProject);

const projectButtons = document.querySelectorAll('.works-button');
projectButtons.forEach(
  (button) => button.addEventListener('click', () => {
    populatePopup(Number(button.id));
    modalbody.style.display = 'block';
  }),
);

function goToPreviousProject() {
  populatePopup(Number(previousButton.id) - 1);
}

function goToNextProject() {
  populatePopup(Number(nextButton.id) + 1);
}

previousButton.addEventListener('click', goToPreviousProject);
nextButton.addEventListener('click', goToNextProject);
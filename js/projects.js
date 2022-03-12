const wrapper = document.getElementById('wrapper');
const body = document.getElementById('page-body');
const recentWorks = document.querySelector('.recent-works-cards')
const modalbody = document.querySelector('.project-popup-window')
const projectImage = document.querySelector('.pop-up-overlay-image')
const projectTitle = document.querySelector('.project-title')
const projectTechnologies = document.querySelector('.lang-tags')
const projectDescription = document.querySelector('.description')
const liveLink = document.querySelector('.live-view')
const sourceCode = document.querySelector('.source-code')
const closeProject = document.querySelector('.close')
const previousButton = document.querySelector('.prevProject')
const nextButton = document.querySelector('.nextProject')
const projectsData = [
  {
    id: 0,
    name: 'Practice to Perfect',
    image: 'assets/images/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/',
  },
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    image: 'assets/images/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/',
  },
  {
    id: 2,
    name: 'A stitch in time, saves nine',
    image: 'assets/images/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/',
  },
  {
    id: 3,
    name: 'Remember where you come from',
    image: 'assets/images/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/',
  },
  {
    id: 4,
    name: 'The Gallery Dept.',
    image: 'assets/images/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/',
  },
  {
    id: 5,
    name: 'A trip to Mars',
    image: 'assets/images/Snapshoot-Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://deyemiobaa.github.io/Personal-Portfolio/',
    source: 'https://github.com/deyemiobaa/Personal-Portfolio/',
  },
];

projectsData.forEach((project) => {
  recentWorks.innerHTML += 
    `
    <div class="works">
      <div class="work-details">
        <h3>${project.name}</h3>
        <ul class="language-tags">
          ${project.technologies.map((tech) => (`<li>${tech}</li>`)).join('')}
        </ul>
        <button id="${project.id}" class="works-button">See Project</button>
      </div>
    </div> `
})


function disablePreviousOrNextButton() {
  if (previousButton.id <= 0) {
    previousButton.style.visibility = 'hidden'
  } else if (nextButton.id >= projectsData.length - 1) {
    nextButton.style.visibility = 'hidden'
  } else {
    previousButton.style.visibility = 'visible'
    nextButton.style.visibility = 'visible'
  }
}
function populatePopup(object) {
  projectImage.src = projectsData[object].image
  projectTitle.textContent = projectsData[object].name
  projectTechnologies.innerHTML = projectsData[object].technologies.map((tech) => (`<li>${tech}</li>`)).join('')
  projectDescription.textContent = projectsData[object].description
  liveLink.href = projectsData[object].live
  sourceCode.href = projectsData[object].source
  previousButton.id = projectsData[object].id
  nextButton.id = projectsData[object].id
  wrapper.classList.add('blur');
  body.classList.add('color');
  disablePreviousOrNextButton()
}

function closePopup(closeButton) {
  closeButton.addEventListener('click', () => {
    modalbody.style.display = 'none'
    wrapper.classList.remove('blur');
    body.classList.remove('color');
  })
}
closePopup(closeProject)

const projectButtons = document.querySelectorAll('.works-button')
let currentProject = 0
projectButtons.forEach(
  (button) => button.addEventListener('click', () => {
    populatePopup(Number(button.id))
    modalbody.style.display = 'block'
    currentProject = Number(button.id)
  })
)

function goToPreviousProject() {
  populatePopup(Number(previousButton.id) - 1)
}

function goToNextProject() {
  populatePopup(Number(nextButton.id) + 1) 
}

previousButton.addEventListener('click', goToPreviousProject)
nextButton.addEventListener('click', goToNextProject)
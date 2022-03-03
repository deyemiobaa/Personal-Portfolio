const contactForm = document.querySelector('#contact-form');
const fullName = document.querySelector('#name');
const emailAddress = document.querySelector('#email');
const message = document.querySelector('#message');

function dataStorage() {
  const user = {
    userFullName: fullName.value,
    userEmail: emailAddress.value,
    userMessage: message.value,
  };

  localStorage.setItem('userData', JSON.stringify(user));
}
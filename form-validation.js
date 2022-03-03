const email = document.getElementById('email');
const form = document.getElementById('contact-form');
const errorMsg = document.getElementById('form-error');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMsg.style.visibility = 'visible';
    event.preventDefault();
  } else if (email.validity.typeMismatch) {
    errorMsg.textContent = 'Please enter a valid email address';
    errorMsg.style.visibility = 'visible';
    event.preventDefault();
  } else {
    errorMsg.style.visibility = 'hidden';
  }
});

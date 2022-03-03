const email = document.getElementById('email');
const form = document.getElementById('contact-form');
const errorMsg = document.getElementById('form-error');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.visibility = 'visible';
    setTimeout(() => {
      errorMsg.style.visibility = 'hidden';
    }, 5000);
  } else if (email.validity.typeMismatch) {
    event.preventDefault();
    errorMsg.textContent = 'Please enter a valid email address';
    errorMsg.style.visibility = 'visible';
    setTimeout(() => {
      errorMsg.style.visibility = 'hidden';
    }, 5000);
  } else {
    errorMsg.style.visibility = 'hidden';
  }
});

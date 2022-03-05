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
    email.value = email.value.toLowerCase();
  } else {
    errorMsg.style.visibility = 'hidden';
  }
});

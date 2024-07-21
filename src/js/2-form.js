document.addEventListener('DOMContentLoaded', function () {
  let formData = {
    email: '',
    message: '',
  };

  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    formData = JSON.parse(storedData);
    populateForm(formData);
  }

  function populateForm(formData) {
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  form.addEventListener('input', function (event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };

    form.reset();
  });
});

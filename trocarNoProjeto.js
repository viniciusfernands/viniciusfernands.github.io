function validationForm() {
  const formButton = document.querySelector('#submit-btn');

  formButton.disabled = true;

  const confirmInput = document.querySelector('#agreement');

  confirmInput.addEventListener('click', () => {
    const click = confirmInput.checked;

    if (click === true) {
      formButton.disabled = false;
      return;
    }
    formButton.disabled = true;
  });
}

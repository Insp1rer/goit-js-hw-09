const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  const text = textarea.value.trim();
  const name = form.elements.email.value.trim();
  if (text === '' || name === '') {
    alert('Заповніть поля');
    return;
  }
  const userData = JSON.stringify({ text, name });
  localStorage.setItem(storageKey, userData);
  form.reset();
}

const json = localStorage.getItem(storageKey) ?? '';

try {
  const data = JSON.parse(json);
  console.log(data);
  textarea.value = data.text;
  form.elements.email.value = data.name;
} catch {
  console.log('no user data');
}

const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// --- витягування даних ---
const savedData = JSON.parse(localStorage.getItem(storageKey)) ?? {};
emailInput.value = savedData.email ?? '';
messageInput.value = savedData.message ?? '';
//--------------------------

form.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  if (email === '' || message === '') {
    alert('Заповніть поля');
    return;
  }
  const userData = {
    email,
    message,
  };

  localStorage.setItem(storageKey, JSON.stringify(userData));
  form.reset();
  console.log(userData);
  localStorage.clear();
}

// --- зберігання даних ---
form.addEventListener('input', () => {
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const userData = {
    email,
    message,
  };
  localStorage.setItem(storageKey, JSON.stringify(userData));
});

// const storageKey = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// const emailInput = form.elements.email;
// const messageInput = form.elements.message;

// form.addEventListener('submit', formSubmitHandler);

// function formSubmitHandler(event) {
//   event.preventDefault();
//   const email = emailInput.value.trim();
//   const message = messageInput.value.trim();
//   if (email === '' || message === '') {
//     alert('Заповніть поля');
//     return;
//   }
//   const userData = {
//     email,
//     message,
//   };
//   localStorage.setItem(storageKey, JSON.stringify(userData));

//   form.reset();

//   console.log(userData);

//   localStorage.clear();
// }

// const json = localStorage.getItem(storageKey) ?? '';

// try {
//   const data = JSON.parse(json);
//   messageInput.value = data.message;
//   emailInput.value = data.email;
// } catch {
//   console.log('no user data');
// }

//-----------------------------------------------------------------------

const letter = document.querySelector('.letter');
const closeBtn = document.querySelector('.paper-close');
const startBtn = document.querySelector('.start-quiz');

document.querySelector('.envelope').addEventListener('click', () => {
  if (letter.classList.contains('letter--open')) {
    letter.classList.remove('letter--open');
    letter.classList.add('letter--close');
    setTimeout(() => letter.classList.remove('letter--close'), 600);
  } else {
    letter.classList.remove('letter--close');
    letter.classList.add('letter--open');
  }
});

closeBtn.addEventListener('click', () => {
  letter.classList.remove('letter--open');
  letter.classList.add('letter--close');
  setTimeout(() => letter.classList.remove('letter--close'), 600);
});

startBtn.addEventListener('click', () => {
  window.location.href = 'form.html';
});

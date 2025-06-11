// Respostas esperadas para o formulário
const expected = [
  "Millena Fregne Perez",   // nome completo
  "18",                     // idade dela
  "infinito",               // nível de beleza
  "Rafael Soares de Moraes",// nome completo dele
  "19"                      // idade dele
];

document.getElementById('intro-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let allCorrect = true;

  for (let i = 0; i < expected.length; i++) {
    const input = document.getElementById(`q${i}`);
    const error = document.getElementById(`err-${i}`);
    if (input.value.trim().toLowerCase() !== expected[i].toLowerCase()) {
      error.style.display = 'block';
      allCorrect = false;
    } else {
      error.style.display = 'none';
    }
  }

  if (allCorrect) {
    // Redireciona para a página do quiz
    window.location.href = 'quiz.html';
  }
});

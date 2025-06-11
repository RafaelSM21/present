// arquivo: quizScript.js

// Gabarito das respostas do quiz
const correctAnswers = [
    'você',        // Pergunta 1
    'tudo',        // Pergunta 2
    'ambos',       // Pergunta 3
    'infinito',    // Pergunta 4
    'luffy',       // Pergunta 5
    'pipoca',      // Pergunta 6
    'ambos',       // Pergunta 7
    'sao paulo'    // Pergunta 8
];

let currentQuestion = 0;
let selectedAnswers = [];

// Função chamada sempre que o usuário clica numa opção
function checkAnswer(index, answer) {
    selectedAnswers[index] = answer;

    const questions = document.querySelectorAll('.question');
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;

    // Atualiza a largura da barra de progresso na pergunta anterior
    const bar = document.querySelectorAll('.progress-bar')[currentQuestion - 1];
    bar.style.width = `${(currentQuestion / questions.length) * 100}%`;

    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add('active');
    } else {
        showResults();
    }
}

// Monta e exibe o resultado final
function showResults() {
    const quiz = document.getElementById('quiz');
    const score = selectedAnswers.reduce(
        (acc, ans, i) => acc + (ans === correctAnswers[i] ? 1 : 0),
        0
    );

    // Cabeçalho do resultado
    quiz.innerHTML = `<h2>Resultado Final 💌</h2>`;

    // Mensagem de parabéns ou incentivo
    quiz.innerHTML += `
    <div class="result-message ${score >= 5 ? 'win' : 'lose'}">
      <p>${score >= 5 ? 'Parabéns, princesa! 🎉' : 'Quase lá, princesa! 💖'}</p>
      <p>Você acertou <strong>${score}</strong> de <strong>${correctAnswers.length}</strong>!</p>
    </div>
  `;

    // Mensagem extra caso ela tenha passado
    if (score >= 5) {
        quiz.innerHTML += `<p class="congrats">PASSOU NO QUIZ, PRINCESA!!! Nunca duvidei de você, minha gatinha 💖</p>`;
    }

    // Gabarito em cards
    quiz.innerHTML += `
    <ul class="answer-key">
      ${correctAnswers.map((correct, i) => {
        const resp = selectedAnswers[i] || '—';
        const ok = resp === correct;
        return `
          <li class="${ok ? 'correct' : 'wrong'}">
            <strong>P${i + 1}:</strong>
            <span class="your">Você: ${resp}</span>
            <span class="cert">Certa: ${correct}</span>
            <span class="icon">${ok ? '✔️' : '❌'}</span>
          </li>
        `;
    }).join('')}
    </ul>
  `;

    // Botões de ação
    quiz.innerHTML += `
    <div class="result-buttons">
      ${score >= 5
            ? `<button id="view-gift" onclick="window.location.href='gift.html'">Ver Presente</button>`
            : ''}
      <button id="try-again" onclick="window.location.reload()">Tentar Novamente</button>
    </div>
    <p class="love-note">Independente das respostas... eu te amo, minha princesa 💖</p>
  `;
}

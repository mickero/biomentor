const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach((card) => {
  card.dataset.term = card.textContent;

  card.addEventListener('click', () => {
    const revealed = card.classList.toggle('revealed');
    card.textContent = revealed ? card.dataset.answer : card.dataset.term;
  });
});

const quizResult = document.getElementById('quiz-result');
const quizButtons = document.querySelectorAll('.quiz-btn');

quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isCorrect = button.dataset.correct === 'true';
    quizResult.textContent = isCorrect
      ? 'Correct! Mitochondria generate most of a cell\'s ATP energy.'
      : 'Not quite. Try again!';
    quizResult.style.color = isCorrect ? '#166534' : '#b91c1c';
  });
});

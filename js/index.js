const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--toggle");
  });
});


const showAnswerButtons = document.querySelectorAll('[data-js="show-answer"]');

showAnswerButtons.forEach(answerButton => {
    answerButton.addEventListener("click", () => {
        
        const currentCard = answerButton.closest('.card');
        const currentAnswer = currentCard.querySelector('[data-js="answer"]');

        currentAnswer.toggleAttribute('hidden')

        if (currentAnswer.hasAttribute('hidden')) {
            answerButton.textContent = 'Show Answer'
        } else {
            answerButton.textContent = 'Hide Answer'
        }
    })
});

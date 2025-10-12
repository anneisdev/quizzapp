// create bunch of html stuff for the cards & add functionalities
const cardContainer = document.querySelector('[data-js="card-container"]');

function createNewCard(data) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const bookmark = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  bookmark.setAttribute("class", "card__bookmark");
  bookmark.setAttribute("data-js", "bookmark");
  bookmark.setAttribute("viewBox", "0 0 24 24");
  bookmark.setAttribute("stroke-width", "2");
  bookmark.setAttribute("stroke-linecap", "round");
  bookmark.setAttribute("stroke-linejoin", "round");
  bookmark.setAttribute("fill", "white");
  bookmark.setAttribute("stroke", "black");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z");
  bookmark.appendChild(path);

  const centerDiv = document.createElement("div");
  centerDiv.classList.add("card__center");

  const questionTitle = document.createElement("p");
  questionTitle.classList.add("card__titles");
  questionTitle.textContent = "Question:";

  const questionText = document.createElement("p");
  questionText.classList.add("card__question");
  questionText.textContent = data.question;

  const answerTitle = document.createElement("p");
  answerTitle.classList.add("card__titles");
  answerTitle.textContent = "Answer:";

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__button");
  answerButton.setAttribute("data-js", "show-answer");
  answerButton.textContent = "Show Answer";

  const answerText = document.createElement("p");
  answerText.classList.add("card__answer");
  answerText.textContent = data.answer;
  answerText.hidden = true;

  centerDiv.append(
    questionTitle,
    questionText,
    answerTitle,
    answerButton,
    answerText
  );

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("card__left");

  const tagElement = document.createElement("a");
  tagElement.classList.add("card__tag");
  tagElement.textContent = data.tag;

  leftDiv.appendChild(tagElement);

  newCard.append(bookmark, centerDiv, leftDiv);
  cardContainer.appendChild(newCard);

  // button functionailities
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--toggle");
  });

  answerButton.addEventListener("click", () => {
    answerText.toggleAttribute("hidden");
    if (answer.hasAttribute("hidden")) {
      answerButton.textContent = "Show Answer";
    } else {
      answerButton.textContent = "Hide Answer";
    }
  });
}

// submit
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createNewCard(data);

  event.target.reset();
});

// textarea characters left

// extra
// dark mode in profile

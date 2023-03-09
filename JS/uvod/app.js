const QUESTIONS = [
  {
    id: 1,
    question: "Koja je najveca planina na svetu?",
    answers: ["Kilimandzaro", "Kopaonik", "Fudzi", "Mont Everest", "K2"],
    correct_answer: "Mont Everest",
    points: 5,
  },
  {
    id: 2,
    question: "Koliko minuta traje fudbalska utakmica?",
    answers: [45, 60, 90, 75, 120],
    correct_answer: 90,
    points: 10,
  },
  {
    id: 3,
    question: "Koja se valuta koristi u Japanu?",
    answers: ["Dinar", "Rublja", "Dolar", "Yen"],
    correct_answer: "Yen",
    points: 15,
  },
  {
    id: 4,
    question: "Glavni grad Kanade je?",
    answers: ["Otava", "Kvebek", "Toronto", "Vankuver"],
    correct_answer: "Otava",
    points: 20,
  },
  {
    id: 5,
    question: "Najveci okean na svetu je?",
    answers: ["Tihi", "Atlanski", "Indijski"],
    correct_answer: "Tihi",
    points: 1,
  },
];

let CURRENT_POINTS = 0;
let CURRENT_INDEX = 0;

const maxPoints = QUESTIONS.reduce((prev, curr) => {
  return prev + curr.points;
}, 0);

const initializeQuiz = () => {
  console.log("Kviz se pokrece..");

  const questionContainer = document.querySelector("#pitanje");
  const answersContainer = document.querySelector("#odgovori");

  if (CURRENT_INDEX > QUESTIONS.length - 1) {
    questionContainer.innerHTML = "";
    answersContainer.style.display = "none";

    questionContainer.textContent = `Cestitamo osvojili ste ${CURRENT_POINTS} od mogucih ${maxPoints}`;
    `teskt ${9 % 3 === 0 ? "STA IMA" : "NEMA NISTA"}`;
    return;
  }
  answersContainer.innerHTML = "";

  const question = QUESTIONS[CURRENT_INDEX];

  questionContainer.textContent = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;

    button.onclick = () => {
      submitAnswer(question.id, button.textContent);
    };

    answersContainer.appendChild(button);
  });
};

const submitAnswer = (id, answer) => {
  const question = QUESTIONS[CURRENT_INDEX];

  if (question.id === id) {
    if (question.correct_answer.toString() === answer.toString()) {
      CURRENT_POINTS += question.points;
      console.log(CURRENT_POINTS);
    }
    CURRENT_INDEX++;
    initializeQuiz();
  }
};

initializeQuiz();

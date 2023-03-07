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
    points: 5,
  },
];

let CURRENT_POINTS = 0;

const maxPoints = QUESTIONS.reduce((prev, curr) => {
  return prev + curr.points;
}, 0);

const initializeQuiz = () => {
  console.log("Kviz se pokrece..");

  const questionContainer = document.querySelector("#pitanje");
  const answersContainer = document.querySelector("#odgovori");

  const question = QUESTIONS[1];

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

//Kada se funkcija okine, treba da prebaci na sledece pitanje
//Ukoliko je dati odgovor tacan, dodati korisniku onoliko poena koliko to pitanje nosi,
//Prebaciti na sledece pitanje, bilo da je odgovor tacan ili netacan
const submitAnswer = (id, answer) => {
  const question = QUESTIONS[0];

  if (question.id === id) {
    //Prebaci na sledece pitanje
    if (question.correct_answer === answer) {
      CURRENT_POINTS += question.points;
      console.log(CURRENT_POINTS);
    }
  }
};

initializeQuiz();

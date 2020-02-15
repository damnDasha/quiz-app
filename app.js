/**
 * Example store structure
 */
const STORE = {
  questions: [
    {
      question: "Who was the first female designer?",
      answers: [
        "Jennifer anniston",
        "Coco Chanel",
        "Ruth Bader Ginsberg",
        "Hillary Clinton"
      ],
      correctAnswer: "Coco Chanel"
    },
    {
      question: "Who is a famed shoe designer featured in Sex and the City?",
      answers: [
        "Christian Lacroix",
        "John Leguizamo",
        "Manolo Blahnik",
        "Brad Pitt"
      ],
      correctAnswer: "Manolo Blahnik"
    },
    {
      question: "What type of hat is this?", //img here??
      answers: ["Flapper", "Dorky hat", "Postman", "Cowboyhat"],
      correctAnswer: "Cowboy hat"
    },
    {
      question: "What shoe designer created the red soled shoe?",
      answers: [
        "Christian Louboutin",
        "Jonathan Taylor Thomas",
        "Steven Tyler",
        "Gene Simmons"
      ],
      correctAnswer: "Christian Louboutin"
    },
    {
      question: "What is widely considered the fashion capital of the world?",
      answers: [
        "Juneau, Alaska",
        "Mexico City",
        "Paris, France",
        "North Siberia, Russia"
      ],
      correctAnswer: "Paris, France"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function generateStartScreenHtml() {
  return `
  <div class="start-screen">
    <p>This quiz will test your fashion knowledge.
      When it is over you will be a fashion... monger!
    </p>
    <button type="button" id="start">Start Quiz</button>
  </div>
  `;
}

function generateQuestionNumberandScoreHtml() {
  return ` 
  <ul class="question-and-score">
    <li id="question-number">
      Question Number: ${STORE.questionNumber + 1}/${STORE.questions.length}
    </li>
    <li id="score">
      Score: ${STORE.score}/${STORE.questions.length}
    </li>
  </ul>
`;
}

function generateAnswersHtml() {
  const answersArray = STORE.questions[STORE.currentQuestion].answers;
  let answersHtml = "";
  let i = 0;
  //why arent the answers appearing?

  answersArray.forEach((answer, i) => {
    answersHtml += `
    <div id="option-container-${i}">
    <input type="radio" name="options" id="option${i + 1}" value= "${answer}
    " tabindex ="${i + 1}" required>
    <label for="option${i + 1}"> ${answer}</label>
    </div>
    `;
  });

  return answersHtml;
}

function generateQuestionHtml() {
  // what question are we on
  // STORE.questionNumber
  // how do we grab that question?
  let currentQuestion = STORE.questions[STORE.currentQuestion];
  // how can we then display that questions title
  return `
  <form id="question-form" class="question-form">
  <fieldset>
  <div class="question">
  <legend>${currentQuestion.question}</legend>
  </div>
  <div class="answers">
  ${generateAnswersHtml()}
  </div>
  <button type="submit-button" id="submit-button"
  tabindex="5">Submit</button>
  <button type="next-question-button" id="next-question-button"
  tabindex="6">Next</button>
  </fieldset>
  </form>
  `;
}

function generateAnswerList(answers) {
  //all the answers from the array html?
}

function generateResultsScreen() {
  return `
  <div class="results">
  <form id="reset-quiz">
  <fieldset>
  <legend>You Scored:${STORE.score}/${STORE.questions.length}</legend>
  </div>
  <button type="button" id="reset">Reset Quiz</button>
  </fieldset>
  </form>
  `;
} //how come all the html isnt prettier?

function generateFeedbackHtml() {
  let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
  let html = "";
  if (answerStatus === "correct") {
    html = `
    <div class="right-answer">Correct!</div>
    `;
  } else answerStatus === "incorrect";
  {
    html = `
    <div class="wrong-answer">Sorry! You suck</div>
    `;
  }
}

// Rendering functions
function renderQuestionText() {
  //changes to the html go here
  //if //next button is clicked
  //return html = generateQuestionHtml //should we give questions different names
  //${question.question} + 1; //is this right?
}

/* all purpose render function that will conditionally
render the page based upon the state of the STORE*/

function render() {
  let html = "";
  console.log(STORE.quizStarted, STORE.questionNumber);

  if (STORE.quizStarted === false) {
    $("main").html(generateStartScreenHtml());
    return;
  } else if (STORE.questionNumber < STORE.questions.length) {
    console.log("here");
    html = generateQuestionNumberandScoreHtml();
    html += generateQuestionHtml();
    $("main").html(html);
  } else {
    $("main").html(generateResultsScreen());
  }
}

// Event handlers

function handleStartClick() {
  $("main").on("click", "#start", function(event) {
    //console.log("started");
    STORE.quizStarted = true;
    render();
  });
}
function handleNextQuestion() {
  $("body").on("click", "#next-question-btn", event => {
    //console.log("next plz");
    render();
  });
}

function handleAnswerSubmitted() {
  $("main").on("click", "#submit", "#question-form", () => {
    event.preventDefault();
    const currentQuestion = STORE.questions[STORE.currentQuestions];

    // Retrieve answer identifier of user-checked radio btn
    let selectedOption = $("input[name=options]:checked").val();
    let optionContainerId = `#option-container-${currentQuestion.answers.findIndex(
      i => i === selectedOption
    )}`;
    // Perform check: User answer === Correct answer?

    if (selectedOption === currentQuestion.correctAnswer) {
      STORE.score++;
      //ok now what?
    }
    // Update STORE and render appropriate section
  });
}
$(handleAnswerSubmitted);

function handleResetButton() {
  $("main").on("reset", "#reset", () => {
    resetQuiz();
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestion();
  handleAnswerSubmitted();
  handleResetButton();
}

$(handleQuizApp);

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

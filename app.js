/**
 * Example store structure
 */
const store = {
  
  questions: [
    {
      question: 'Who was the first female designer?',
      answers: [
        'Jennifer anniston',
        'Coco Chanel',
        'Ruth Bader Ginsberg',
        'Hillary Clinton'
      ],
      correctAnswer: 'Coco Chanel'
    },
    {
      question: 'Who is a famed shoe designer featured in Sex and the City?',
      answers: [
        'Christian Lacroix',
        'John Leguizamo',
        'Manolo Blahnik',
        'Brad Pitt'
      ],
      correctAnswer: 'Manolo Blahnik'
    },
    {
      question: 'What type of hat is this?',//img here??
      answers: [
        'Flapper',
        'Dorky hat',
        'Postman',
        'Cowboyhat'
      ],
      correctAnswer: 'Cowboy hat'
    },
    {
      question: 'What shoe designer created the red soled shoe?',
      answers: [
        'Christian Louboutin',
        'Jonathan Taylor Thomas',
        'Steven Tyler',
        'Gene Simmons'
      ],
      correctAnswer: 'Christian Louboutin'
    },
    {
      question: 'What is widely considered the fashion capital of the world?',
      answers: [
        'Juneau, Alaska',
        'Mexico City',
        'Paris, France',
        'North Siberia, Russia'
      ],
      correctAnswer: 'Paris, France'
    },
    
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

//where does the wireframe go? per view, meaning its per 'question'
//'answer' 'right' 'wrong' score, etc..
function generateAnswerList(answers) {
  //template goes here
}

// Rendering functions
function renderQuestionText() {
  //changes to the html go here
}

// Event handlers
function handleAnswerSubmitted() {
  $('main').on('submit', '#question-form', () => {
  // Retrieve answer identifier of user-checked radio btn
  // Perform check: User answer === Correct answer?
  // Update STORE and render appropriate section
  });
}

$(handleAnswerSubmitted);

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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates 

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
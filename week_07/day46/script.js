const QUIZ_DATA = [
    {
        question: 'Which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        correct: 'b',
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdown Language',
        c: 'Hyperloop Machine Language',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b',
    },
];

const QUIZ = document.getElementById('quiz');
const ANSWER_ELS = document.querySelectorAll('.answer');
const QUESTION_EL = document.getElementById('question');
const A_TEXT = document.getElementById('a_text');
const B_TEXT = document.getElementById('b_text');
const C_TEXT = document.getElementById('c_text');
const D_TEXT = document.getElementById('d_text');
const SUBMIT_BTN = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = QUIZ_DATA[currentQuiz];

    QUESTION_EL.innerText = currentQuizData.question;
    A_TEXT.innerText = currentQuizData.a;
    B_TEXT.innerText = currentQuizData.b;
    C_TEXT.innerText = currentQuizData.c;
    D_TEXT.innerText = currentQuizData.d;
}

function deselectAnswers() {
    ANSWER_ELS.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    ANSWER_ELS.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

SUBMIT_BTN.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === QUIZ_DATA[currentQuiz].correct) score++;

        currentQuiz++;

        if (currentQuiz < QUIZ_DATA.length) {
            loadQuiz();
        } else {
            QUIZ.innerHTML = `
                <h2>You answered ${score}/${QUIZ_DATA.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

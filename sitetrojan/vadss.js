const quizData = [
    {
        question: "Quando Bayonetta foi lançado?",
        a: "29 de outubro de 2009",
        b: "20 de novembro de 2009",
        c: "20 de novembro de 2008",
        d: "29 de outubro de 2008",
        correct: "a",
    },

    {
        question: "Qual é a cidade fictícia onde a maior parte da ação ocorre nos jogos Bayonetta?",
        a: "New York",
        b: "Vigrid",
        c: "San Francisco",
        d: "Alfheim",
        correct: "b",
    },

    {
        question: "Qual é o gênero predominante dos jogos Bayonetta?",
        a: "RPG de ação",
        b: "Jogo de tiro em primeira pessoa",
        c: "Plataforma de aventura",
        d: "Hack and slash",
        correct: "d",
    },

    {
        question: "Qual é o nome da organização secreta de bruxas que Bayonetta faz parte?",
        a: "Witch Huntress Society",
        b: "Umbra Witches",
        c: "Coven of Shadows",
        d: "Mystic Sorcerers",
        correct: "b",
    },

    {
        question: "Qual é a arma característica de Bayonetta que ela usa em seus pés?",
        a: "Espadas",
        b: "Chicotes",
        c: "Pistolas",
        d: "Patins",
        correct: "c",
    },

    {
        question: "Qual é o estúdio de desenvolvimento por trás da trilogia Bayonetta?",
        a: "Naughty Dog",
        b: "PlatinumGames",
        c: "Capcom",
        d: "Square Enix",
        correct: "b",
    },

    {
        question: "Qual é a assinatura de Bayonetta que ela usa para invocar ataques especiais?",
        a: "Climax Bracelet",
        b: "Witch Time Watch",
        c: "Umbran Climax",
        d: "Witchcraft Amulet",
        correct: "c",
    },

    {
        question: "Qual é o nome da cantora que fez um cover da música Fly Me to the Moon para a trilha sonora de Bayonetta?",
        a: "Julie London",
        b: "Doris Day",
        c: "Julie London",
        d: "Helena Noguerra",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você repondeu ${score}/${quizData.length} perguntas corretamente ;)<img id="socorro" src="bayonettanaoda.gif"></h2>
           <button onclick="location.reload()">Jogar Novamente</button>
           `
       }
    }
})


const modal = document.querySelector('.modal')
    const close = modal.querySelector('.close')
    const open = document.querySelector('button')

    open.addEventListener('click', () => {
      modal.classList.add("opened")
    })

    close.addEventListener('click', () => {
      modal.classList.remove("opened")
    })

    modal.addEventListener('click', (evt) => {
      if (evt.target.classList.contains("modal")) {
        modal.classList.remove("opened")
      }
    })
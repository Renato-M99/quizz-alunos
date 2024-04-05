/* Parágrafo onde será exibida a pergunta. */
const question = document.querySelector("#question");
//div onde será exibida as respostas.
const answersBox = document.querySelector("#answers-box");
//elemento pai onde serão exibidas as perguntas.
const quizzContainer = document.querySelector("#quizz-container");
//elemento pai onde serão exibidas as respostas.
const scoreContainer = document.querySelector("#score-container");

// vetor para armazenar as alternativas
// vetor é uma variável que armazena muitos valores de uma vez só.
const letters = ['a', 'b', 'c', 'd'];
let points = 0; //inicializar números.
let actualQuestion = 0; // inicilizar questoes iniciais.

// Perguntas

/* uma variavel dentro de um array para armazenar o JSON */
const questions = [

    // Arquivo JSON dentro do JS (sim, dá pra fazer assim também!)
    {
        "question": "PHP foi desenvolvido para qual finalidade?",
        "answers": [
            {
                "answer": "back-end",
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema Operacional",
                "correct": false
            },
            {
                "answer": "Banco de Dados",
                "correct": false
            }
        ]

    }, {

        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            }, {
                "question": "Qual o seletor id no CSS",
                "answers": [
                    {
                        "answer": "#",
                        "correct": true
                    },
                    {
                        "answer": ".",
                        "correct": false
                    },
                    {
                        "answer": "@",
                        "correct": false
                    },
                    {
                        "answer": "/",
                        "correct": false
                    },
                ]
            }
        ]

    }
]


// Criar uma questão pelo JS no HTML
function createQuestion(i){

    //Limpa questão anterior
    const oldButtons = answersBox.querySelectorAll("button");

    //percorre todas as posições do array, limpando os botôes que já estão na tela
    oldButtons.forEach(function(btn){
        btn.remove();
    });

    // Altera texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    // Altera o texto da questão atual de acordo com as questôes do arquivo JSON.
    // propriedade textContent serve para adicionar valores dentro das tags selecionadas.
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insere alternativas
    questions[i].answers.forEach(function(answer, i){

        //Altera texto do template
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer ['answer'];

    });

}





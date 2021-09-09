const quiz = [ 
    { 
        Ques: "Q1 : Which of the following is correct about features of JavaScript?",
        a:"JavaScript is designed for creating network centric applications", 
        b:"JavaScript is complementry to an integrated with Java", 
        c:"All of the above", 
        d:"JavaScript is lightweight, interpreted programming language", 
        ans:"answer3" 
    },
    {
        Ques: "Q2 : Which of the following function of Array object returns a string representing the array and its elements?", 
        a:"toSource()", 
        b:"splice()", 
        c:"toString()", 
        d:"sort()", 
        ans:"answer3" 
    },
    {
         Ques: "Q3 : Which built-in method sorts the element of an array?", 
         a:" ChangeOrder(order)", 
         b:"(sort)", 
         c:"(order)", 
         d:"None of the above", 
         ans:"answer3" 
    },
    { 
        Ques: "Q4 : Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?", 
        a:"charAt()", 
        b:"charCodeAt()", 
        c:"concat()", 
        d:"indexof()", 
        ans:"answer2" 
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll(".answer");

const showscore = document.querySelector("#showscore");

let quesCount = 0;
let score = 0;

const LoadQuestion = () => {
    const quizList = quiz[quesCount];
    question.innerText = quizList.Ques;
    option1.innerText = quizList.a;
    option2.innerText = quizList.b;
    option3.innerText = quizList.c;
    option4.innerText = quizList.d;
}

LoadQuestion();

const getcheckAnswer = () => {
    let answer ;

    answers.forEach((curAnsEle) => {
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }

    });
    return answer;
};

const deselectAll = ()=> {
    answers.forEach((curAnsEle) => curAnsEle.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quiz[quesCount].ans) {
        score++;
        console.log("hii")
    };

    quesCount++;


    deselectAll();

    if (quesCount < quiz.length) {
        LoadQuestion();
    }
    else{
        showscore.innerHTML =`
            <h3>Your score ${score}/${quiz.length}<h3>
            <button class = "btn" onclick = "location.reload()"> Try Again</button>
        `;
        showscore.classList.remove('scorearea');
    }


});
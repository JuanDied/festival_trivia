// //@ts-check
// import { questions } from "./questions.js";

const questions =[ //creaamos un array de objetos para las preguntas, con opciones y respuesta
    {question:"Para qué sirve una SSD",
        choices:[
        "Para ventilar la pc",
        "Para guardar datos permanentes",
        "Para guardar datos temporales"], 
        answer: "Para guardar datos permanentes",
    },
    {question:"Qué es  javascript",
        choices:[
        "Un lenguaje de programación",
        "Una librería de java",
        "Un software de retoque digital"], 
        answer: "Un lenguaje de programación",
    },
    {question:"Dónde se aloján las webs",
        choices:[
        "En el computador del programador",
        "En un servidor",
        "En una base de datos"], 
        answer: "En un servidor",
    }
    ];
    
let q_number=0;
let sisas=0;
let nonas= 0;

next();

function showQuestion(text){ //Este metodo imprime la pregunta
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  };

function showChoices(choices) {//Este hace los botones con las opciones
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {// Generamos la cantidad de botones necesaria
      const button = document.createElement("button");
      button.addEventListener("click", check);
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }


function check(){// Este metodo chequea si la respuesta es correcta y asigna punto.


    let choicee = this.innerText;
    console.log(choicee);
    if (choicee == questions[q_number-1].answer) {
        console.log("sisas");
        // console.log("qn "+questions[q_number].answer);
        console.log("qn-1 "+questions[q_number-1].answer);
        sisas++;
        console.log("sisa? "+ sisas);
        next();
        
    }else{
        console.log("nonas");
        // console.log("qn "+questions[q_number].answer);
        console.log("qn-1 "+questions[q_number-1].answer);
        // sisas--;
        console.log("sisa? "+ sisas);
        next();
        
    
    }

}

function next(){ // Esto es para continuar a la siguiente pregunta y si ya terminamos muestra el resultado
    
    console.log(questions.length);
    if(q_number<questions.length){
        let _question= questions[q_number];
     q_number++;
    let text= _question.question;
    showQuestion(text);
    showChoices(_question.choices);
    // q_number++;
    }
    else{
        let result= `Su resultado es ${sisas} de ${questions.length}`
        const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
        showQuestion(result);
    }
    
    
}



















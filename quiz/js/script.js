

    // Quiz
    const quizData = [
        {
          question: "¿Cuantas cartas contienen los arcanos mayores?",
          a: "23",
          b: "32",
          c: "12",
          d: "22",
          correct: "d"
        },
  
        {
          question: "¿A que se asocian las espadas?",
          a: "La mente",
          b: "Emociones",
          c: "Ira",
          d: "Dinero",
          correct: "a"
        },
  
        {
          question: "¿A que se asocian el Loco?",
          a: "Ideas",
          b: "Astucia, iniciación, comienzo",
          c: "Libertad, viaje, búsqueda, huida",
          d: "Soledad, sabiduría, experiencia",
          correct: "c"
        },
  
        {
          question: "¿Cuales son los cuatro elementos principales de los arcanos menores?",
          a: "Oros, Espadas, Bastos y Copas",
          b: "Bastos, Cuchillos, Copas, Monedass",
          c: "Copas, reyes, bastos, oros.",
          d: "Pajes, reyes, caballeros, reinas,",
          correct: "a"
        },
  
        {
          question: "¿Con que se relaciona el numero 4?",
          a: "Perfección",
          b: "Inicios",
          c: "Estabilidad",
          d: "Crecimiento",
          correct: "c"
        },
  
        {
          question: "¿Con que se relaciona la carta El Emperador?",
          a: "Vocación, llamada, nacimiento",
          b: "Estabilidad, dominación, poder",
          c: "Mujer, decidir, equilibrar",
          d: "Suerte, nutrir, fecundidad, inspiración",
          correct: "b"
        },
  
        {
          question: "¿Con que se asocía la figura del paje?",
          a: "Acción en el mundo",
          b: "Momento de inicio, inexperiencia",
          c: "Momento de puente y pasaje a otro estadio",
          d: "Un ciclo llegado a su fin",
          correct: "b"
        },
  
        {
          question: "¿Que significados estan asociados al número 8?",
          a: "Ideas",
          b: "Crisis de despedida, desapego",
          c: "Ciclo llegando a su fin",
          d: "Estabilidad y exigencia",
          correct: "d"
        },
  
        {
          question: "¿Que significados tiene la carta el mundo?",
          a: "Sacrifio, inmovilidad, no elegir, gestación",
          b: "Renovación, ciclo, impermanecia",
          c: "Cambio, mutación, limpieza, revolución",
          d: "Realización, plenitud",
          correct: "d"
        },
  
        {
          question: "¿Con que se relaciona el numero 9",
          a: "Puente, tentación",
          b: "Inicios",
          c: "Crisis de despedida, desapego",
          d: "Belleza, enamoramiento",
          correct: "c"
        },
  
        
  
        
     ];
  
     const quiz= document.getElementById("quiz");
     const answerEls = document.querySelectorAll(".answer");
     const questionEl = document.getElementById("question");
     const a_text = document.getElementById("a_text");
     const b_text = document.getElementById("b_text");
     const c_text = document.getElementById("c_text");
     const d_text = document.getElementById("d_text");
     const submitBtn = document.getElementById("mysubmit");
  
     let currentQuiz= 0;
     let score = 0;
     
     loadQuiz();
     
     function loadQuiz(){
       deselectAnswers();
       const currentQuizData = quizData[currentQuiz];
  
       questionEl.innerText = currentQuizData.question;
       a_text.innerText = currentQuizData.a;
       b_text.innerText = currentQuizData.b;
       c_text.innerText = currentQuizData.c;
       d_text.innerText = currentQuizData.d;
     }
  
     function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
  }
  
      submitBtn.addEventListener('click', () => {
        const answer = getSelected();
        if(answer) {
           if(answer === quizData[currentQuiz].correct) {
               score++;
           }
    
           currentQuiz++;
    
           if(currentQuiz < quizData.length) {
               loadQuiz();
           } else {
               quiz.innerHTML = `
               <h2>Respondiste ${score}/${quizData.length} preguntas correctamente</h2>
    
               <button class="btn btn-primary btn-large bgpurple w-100 btnquiz" onclick="location.reload()">Reload</button>
               `;
           }
        }
    });

// ================================
// BANCO DE PERGUNTAS
// ================================

const perguntasOriginais = [

{
    pergunta: "Qual é a minha cidade de nascimento?",

    opcoes:[
        {texto:"Santa Amélia", correta:false},
        {texto:"Bandeirantes", correta:false},
        {texto:"Santo Antônio da Platina", correta:true}
    ]
},


{
    pergunta:"Qual é a minha cor favorita?",

    opcoes:[
        {texto:"Verde", correta:false},
        {texto:"Azul", correta:false},
        {texto:"Amarelo", correta:true}
    ]
},


{
    pergunta:"Qual é a minha matéria favorita?",

    opcoes:[
        {texto:"Ciências", correta:false},
        {texto:"Português", correta:false},
        {texto:"Matemática", correta:true}
    ]
},


{
    pergunta:"Qual é o meu esporte favorito?",

    opcoes:[
        {texto:"Futebol", correta:false},
        {texto:"Vôlei", correta:false},
        {texto:"Basquete", correta:true}
    ]
},


{
    pergunta:"Qual é o meu animal favorito?",

    opcoes:[
        {texto:"Cachorro", correta:true},
        {texto:"Gato", correta:false},
        {texto:"Cavalo", correta:false}
    ]
},


{
    pergunta:"Qual é a minha comida favorita?",

    opcoes:[
        {texto:"Pizza", correta:false},
        {texto:"Lasanha", correta:true},
        {texto:"Hambúrguer", correta:false}
    ]
}

];



// ================================
// VARIÁVEIS
// ================================


let perguntas = [];

let indice = 0;

let pontos = 0;

let segundos = 0;

let tempo;

let respondeu = false;




// ================================
// EMBARALHAR
// ================================

function embaralhar(lista){

    return lista.sort(
        ()=>Math.random()-0.5
    );

}





// ================================
// INICIAR QUIZ
// ================================

function IniciarQuiz(){


    document.getElementById("botaozinho")
    .style.display="none";


    document.querySelector(".apresentacao")
    .style.display="none";


    document.getElementById("painel")
    .classList.remove("oculto");



    perguntas = embaralhar(
        [...perguntasOriginais]
    );


    indice = 0;

    pontos = 0;

    segundos = 0;



    tempo=setInterval(()=>{


        segundos++;


        document.getElementById("tempo")
        .innerHTML=segundos;



    },1000);



    mostrarPergunta();


}






// ================================
// MOSTRAR PERGUNTA
// ================================

function mostrarPergunta(){


    respondeu=false;



    const quiz=document.getElementById("quiz");



    let atual=perguntas[indice];



    let opcoes=embaralhar(
        [...atual.opcoes]
    );



    let html=`

    <h2>
    ${indice+1} - ${atual.pergunta}
    </h2>

    `;



    opcoes.forEach((opcao)=>{


        html+=`

        <button 
        class="opcao"
        onclick="responder(${opcao.correta}, this)">

        ${opcao.texto}

        </button>

        `;


    });



    quiz.innerHTML=html;



    document.getElementById("barra")
    .value=indice;



    document.getElementById("proximo")
    .disabled=true;



}





// ================================
// VERIFICAR RESPOSTA
// ================================

function responder(correta,botao){



    if(respondeu){

        return;

    }


    respondeu=true;



    let botoes=document
    .querySelectorAll(".opcao");



    botoes.forEach(botao=>{

        botao.disabled=true;

    });



    if(correta){


        pontos++;


        botao.classList.add("correta");


        document.getElementById("quiz")
        .innerHTML +=

        "<p>✅ Resposta correta!</p>";



    }

    else{


        botao.classList.add("errada");


        document.getElementById("quiz")
        .innerHTML +=

        "<p>❌ Resposta incorreta!</p>";



    }




    document.getElementById("pontuacao")
    .innerHTML=

    "🏆 Pontos: "+pontos;



    document.getElementById("proximo")
    .disabled=false;



}






// ================================
// PRÓXIMA PERGUNTA
// ================================

function proximaPergunta(){


    indice++;



    if(indice < perguntas.length){


        mostrarPergunta();


    }

    else{


        finalizarQuiz();


    }


}





// ================================
// FINAL
// ================================

function finalizarQuiz(){


    clearInterval(tempo);



    document.getElementById("painel")
    .style.display="none";



    let mensagem="";



    if(pontos===6){

        mensagem=
        "🏆 Perfeito! Você acertou tudo!";

    }


    else if(pontos>=4){

        mensagem=
        "🥇 Muito bom!";

    }


    else if(pontos>=2){

        mensagem=
        "🥈 Bom trabalho!";

    }


    else{

        mensagem=
        "🙂 Continue tentando!";

    }





    document.getElementById("resultado")
    .innerHTML=

    `

    <h2>🎉 Questionário Finalizado!</h2>

    <p>
    Você acertou ${pontos} de ${perguntas.length}
    perguntas.
    </p>

    <p>
    ⏱ Tempo:
    ${segundos} segundos
    </p>

    <p>
    ${mensagem}
    </p>

    <br>

    <button onclick="reiniciar()">
    🔄 Fazer novamente
    </button>

    `;



}






// ================================
// REINICIAR
// ================================

function reiniciar(){

    location.reload();

}

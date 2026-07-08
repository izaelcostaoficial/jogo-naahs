// Lista com as suas 6 perguntas originais adaptadas para o sistema dinâmico
const perguntas = [
    {
        pergunta: "1 - Qual é a minha cidade de nascimento?",
        opcoes: [
            {texto: "Santa Amélia", correta: false},
            {texto: "Bandeirantes", correta: false},
            {texto: "Santo Antônio da Platina", correta: true}
        ]
    },
    {
        pergunta: "2 - Qual é a minha cor favorita?",
        opcoes: [
            {texto: "Verde", correta: false},
            {texto: "Azul", correta: false},
            {texto: "Amarelo", correta: true}
        ]
    },
    {
        pergunta: "3 - Qual é a minha matéria favorita?",
        opcoes: [
            {texto: "Ciências", correta: false},
            {texto: "Português", correta: false},
            {texto: "Matemática", correta: true}
        ]
    },
    {
        pergunta: "4 - Qual é o meu esporte favorito?",
        opcoes: [
            {texto: "Futebol", correta: false},
            {texto: "Vôlei", correta: false},
            {texto: "Basquete", correta: true}
        ]
    },
    {
        pergunta: "5 - Qual é o meu animal favorito?",
        opcoes: [
            {texto: "Cachorro", correta: true},
            {texto: "Gato", correta: false},
            {texto: "Cavalo", correta: false}
        ]
    },
    {
        pergunta: "6 - Qual é a minha comida favorita?",
        opcoes: [
            {texto: "Pizza", correta: false},
            {texto: "Lasanha", correta: true},
            {texto: "Hambúrguer", correta: false}
        ]
    }
];

let indice = 0;
let pontos = 0;

// Função executada ao clicar em "Iniciar Questionário"
function IniciarQuiz() {
    document.getElementById("botaozinho").style.display = "none";
    mostrarPergunta();
}

// Função responsável por desenhar a pergunta atual na tela
function mostrarPergunta() {
    const quiz = document.getElementById("quiz");

    // Se respondeu todas as perguntas, mostra a tela final de resultados
    if (indice >= perguntas.length) {
        quiz.innerHTML = `
            <h2>Questionário Finalizado!</h2>
            <h3>Você acertou ${pontos} de ${perguntas.length} perguntas.</h3>
        `;
        return;
    }

    // Cria o título da pergunta atual
    let html = `<h2>${perguntas[indice].pergunta}</h2>`;

    // Cria os botões correspondentes às opções daquela pergunta
    perguntas[indice].opcoes.forEach(opcao => {
        html += `
            <button onclick="responder(${opcao.correta})">
                ${opcao.texto}
            </button><br><br>
        `;
    });

    quiz.innerHTML = html;
}

// Função que valida o clique do usuário
function responder(correta) {
    if (correta) {
        pontos++;
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }

    // Avança para o próximo índice e atualiza a tela
    indice++;
    mostrarPergunta();
}

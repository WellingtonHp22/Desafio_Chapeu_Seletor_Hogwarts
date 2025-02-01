//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Inicie declarando uma variável do tipo array, que armazenará os nomes dos alunos inseridos.
const casasDeHogwarts = ["Grifinória", "Corvinal", "Lufa-lufa", "Sonserina"]; // Array que armazena as casas de Hogwarts
const mensagensCasas = {
    "Grifinória": "🦁 Ah, vejo em você a chama ardente da coragem! O Chapéu Seletor reconheceu instantaneamente o espírito valente que arde em seu coração. Na nobre casa de Godric Gryffindor, onde os bravos encontram seu verdadeiro lar, as tapeçarias vermelho e dourado já tremulam em celebração! O retrato da Mulher Gorda se abre para recebê-lo, e o calor da lareira do Salão Comunal parece mais acolhedor do que nunca. Lembre-se: 'É muito fácil ser corajoso de longe, mas a verdadeira coragem está nas pequenas batalhas diárias.' Que suas aventuras em Hogwarts sejam tão grandiosas quanto seu coração, jovem leão! 🗡️✨",
    
    "Corvinal": "🦅 Fascinante! O Chapéu Seletor encontrou uma mente que brilha como as estrelas que adornam nossa torre! Na casa de Rowena Ravenclaw, onde a sabedoria é nossa maior busca, cada enigma é um novo começo. A águia de bronze em nossa porta já prepara seus mais intrigantes enigmas para testar sua perspicácia. Entre bibliotecas infinitas e discussões filosóficas à luz das velas, sua sede de conhecimento encontrará companhia. Como dizemos: 'O intelecto sem limites é o maior tesouro do homem.' Que sua jornada na Corvinal seja repleta de descobertas extraordinárias! 📚🌟",
    
    "Lufa-lufa": "🦡 Oh, que maravilha! O Chapéu Seletor encontrou um coração verdadeiramente nobre! Nos aconchegantes corredores próximos às cozinhas, onde o aroma de pães frescos se mistura à fragrância das plantas mágicas, a casa de Helga Hufflepuff o aguarda de braços abertos. Nosso jardim de ervas já floresce mais vibrante, antecipando sua chegada! Entre amigos leais e risos sinceros, você descobrirá que a verdadeira magia está na bondade cotidiana. 'Aceite a todos e trabalhe com dedicação' - este é nosso lema. Que sua jornada seja doce como mel e forte como as raízes do carvalho! 🌱✨",
    
    "Sonserina": "🐍 Interessantíssimo... O Chapéu Seletor percebeu em você aquela centelha rara de grandeza! Nas profundezas do lago, onde as antigas paredes de pedra guardam segredos milenares, a casa de Salazar Slytherin o aguarda com expectativa. A luz esmeralda que dança através das águas já projeta sua sombra nas masmorras, e as serpentes entalhadas sussurram profecias sobre seu futuro brilhante. Aqui, entre astúcia e ambição, você encontrará seus verdadeiros aliados. 'A grandeza chama os grandiosos' - este é nosso destino. Que sua ascensão seja tão inevitável quanto a maré e tão brilhante quanto as estrelas refletidas no Lago Negro! 🌊✨"
};

function adicionarAluno() {
    try {
        const input = document.getElementById('amigo');
        const nome = input.value.trim();
        
        // Verificação adicional
        console.log('Nome digitado:', nome); // Debug
        
        if (nome) {
            const casa = sortearCasa();
            const lista = document.getElementById('listaAmigos');
            const item = document.createElement('li');
            const corCasa = getCorCasa(casa);
            
            // Criação do item da lista
            item.textContent = `${nome} - ${casa}`;
            item.style.borderColor = corCasa;
            item.style.boxShadow = `0 0 10px ${corCasa}`;
            
            // Adiciona à lista
            lista.appendChild(item);
            item.classList.add('fade-in');
            
            // Mostra a mensagem
            mostrarMensagemComEfeito(mensagensCasas[casa]);
            
            // Limpa o input
            input.value = '';
            
            // Debug
            console.log('Aluno adicionado:', nome, casa);
        }
    } catch (error) {
        console.error('Erro ao adicionar aluno:', error);
    }
}

// Adicionar evento de tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAluno();
    }
});

function getCorCasa(casa) {
    const coresCasas = {
        "Grifinória": "#740001",
        "Corvinal": "#0E1A40",
        "Lufa-lufa": "#ECB939",
        "Sonserina": "#1A472A"
    };
    return coresCasas[casa];
}

function mostrarMensagemComEfeito(mensagem) {
    let i = 0;
    const velocidade = 50;
    const elemento = document.createElement('div');
    elemento.className = 'mensagem-magica';
    document.body.appendChild(elemento);

    const digitacao = setInterval(() => {
        elemento.textContent += mensagem.charAt(i);
        i++;
        if (i === mensagem.length) {
            clearInterval(digitacao);
            setTimeout(() => elemento.remove(), 5000);
        }
    }, velocidade);
}

function sortearCasa() {
    const indice = Math.floor(Math.random() * casasDeHogwarts.length);
    return casasDeHogwarts[indice];
}

const mensagensRevelacao = {
    "Grifinória": "✨🦁 Os archotes da Torre da Grifinória brilham com intensidade extraordinária! O retrato da Mulher Gorda se abre em grande estilo, enquanto os estandartes vermelho e dourado dançam ao vento mágico. Por decreto do próprio Godric Gryffindor, o bravo bruxo escolhido para esta nobre missão é: ",
    
    "Corvinal": "✨🦅 Os livros da biblioteca flutuam em uma dança misteriosa, enquanto a águia de bronze bate suas asas majestosamente! A própria Rowena Ravenclaw sorriria ao ver que o enigmático bruxo escolhido para esta sábia missão é: ",
    
    "Lufa-lufa": "✨🦡 As plantas mágicas do jardim florescem instantaneamente, enquanto o aroma de tortas recém-assadas preenche o ar! Helga Hufflepuff, em sua infinita bondade, revelou que o leal bruxo escolhido para esta doce missão é: ",
    
    "Sonserina": "✨🐍 As águas do Lago Negro se agitam em padrões hipnóticos, enquanto tochas verdes iluminam as masmorras antigas! Salazar Slytherin, em sua suprema astúcia, determinou que o ambicioso bruxo escolhido para esta grandiosa missão é: "
};
function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    if (lista.children.length > 0) {
        const indice = Math.floor(Math.random() * lista.children.length);
        const alunoSorteadoCompleto = lista.children[indice].textContent;
        const [nome, casa] = alunoSorteadoCompleto.split(' - ');
        
        // Cria mensagem personalizada baseada na casa
        const mensagemBase = mensagensRevelacao[casa] || "✨ O bruxo escolhido foi: ";
        resultado.textContent = mensagemBase + nome;
        resultado.className = 'result-list fade-in';
        
        // Adiciona efeito de brilho temporário
        resultado.style.textShadow = "0 0 10px var(--color-button-hover)";
        setTimeout(() => {
            resultado.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.7)";
        }, 2000);
    } else {
        resultado.textContent = '🔮 A magia não pode ser realizada sem bruxos na lista!';
    }
}

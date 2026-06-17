
Ed Dig Comp Prog E Ia - 1º Ano A Noite - Médio
MUSTAFA SALOMAO, C E-EF M
Próximas atividades
Nenhuma atividade para a próxima semana!

Postada por MARCELO BETTERO LAGES
MARCELO BETTERO LAGES
Criado em: 9 de jun.9 de jun.
// 1. Seleciona o botão e o corpo da página no HTML
const botao = document.getElementById('meuBotao');
const corpoPagina = document.body;

// 2. Função para gerar uma cor hexadecimal aleatória (ex: #FFA07A)
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// 3. Adiciona o evento de clique ao botão
botao.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    corpoPagina.style.backgroundColor = novaCor;
});

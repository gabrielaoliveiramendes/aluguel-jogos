// armazenar o número de jogos alugados
let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); // <id="game-1"/>
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (botao.classList.contains("dashboard__item__button--return")){
        alert("Deseja confirmar a devolução?")
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented")
        botao.textContent = "Alugar";
        // variável jogosAlugados é decrementada
        jogosAlugados--;

    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver"
        // variável jogosAlugados é incrementada
        jogosAlugados++;
    }

// exibir número atualizado de jogos alugados
    contarEExibirJogosAlugados();
}

// evento DOMContentLoaded é acionado quando a página é carregada
document.addEventListener('DOMContentLoaded', function() { 
// Inicializa a contagem considerando que os jogos já começam alugados. Elementos .rented = jogosAlugados
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length; 
// exibir a contagem inicial de jogos alugados no console
    contarEExibirJogosAlugados();
});

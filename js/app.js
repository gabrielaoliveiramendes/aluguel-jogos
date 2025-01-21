function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); // <id="game-1"/>
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (botao.classList.contains("dashboard__item__button--return")){
        alert("Deseja confirmar a devolução?")
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented")
        botao.textContent = "Alugar";

    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver"
        
    }
}

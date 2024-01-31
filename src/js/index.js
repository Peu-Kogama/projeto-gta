// objetivo_1: quando o usuário clicar no botão de seleção deplataformas, deve abri uma caixa com os botoes de seleção de plataformas.

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo")
});

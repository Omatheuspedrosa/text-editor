let fonte = document.querySelector("#fontes");
let texto = document.querySelector('#area-do-texto');
let tamanhoDaFonte = document.querySelector(".tamanho-da-fonte .form-control")

fonte.addEventListener('change', () => {
    texto.style.fontFamily = fonte.value;
})

tamanhoDaFonte.addEventListener('change', () => {
    texto.style.fontSize = tamanhoDaFonte.value + "px";
})
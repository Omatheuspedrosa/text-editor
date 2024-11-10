let fonte = document.querySelector("#fontes");
let texto = document.querySelector('#area-do-texto');
let tamanhoDaFonte = document.querySelector(".tamanho-da-fonte .form-control")

function limitarTamanhoFonte(valor) {
    return Math.max(1, Math.min(valor, 100));
}

fonte.addEventListener('change', () => {
    texto.style.fontFamily = fonte.value;
});

tamanhoDaFonte.addEventListener('change', () => {
    let novoTamanho = limitarTamanhoFonte(parseInt(tamanhoDaFonte.value) || 1);
    tamanhoDaFonte.value = novoTamanho;
    texto.style.fontSize = novoTamanho + "px";
});

document.querySelector(".btn-menos").addEventListener('click', () => {
    let novoTamanho = limitarTamanhoFonte(parseInt(tamanhoDaFonte.value) - 1 || 1);
    tamanhoDaFonte.value = novoTamanho;
    texto.style.fontSize = novoTamanho + "px";
});

document.querySelector(".btn-mais").addEventListener('click', () => {
    let novoTamanho = limitarTamanhoFonte(parseInt(tamanhoDaFonte.value) + 1 || 100);
    tamanhoDaFonte.value = novoTamanho;
    texto.style.fontSize = novoTamanho + "px";
});

document.querySelector(".btn-negrito").addEventListener('click', () => {
    texto.classList.toggle("negrito");
});

document.querySelector(".btn-italico").addEventListener('click', () => {
    texto.classList.toggle("italico");
});

document.querySelector(".btn-sublinhado").addEventListener('click', () => {
    texto.classList.toggle("sublinhado");
});

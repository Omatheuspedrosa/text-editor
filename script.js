import { transformarTexto, alinhamento, limitarTamanhoFonte } from "./modulos.js";

let fonte = document.querySelector("#fontes");
let texto = document.querySelector('#area-do-texto');
let tamanhoDaFonte = document.querySelector(".tamanho-da-fonte .form-control")
let corDoTexto = document.querySelector('#escolherCor');
const barraDeFerramentas = document.querySelector('.barra-de-ferramentas');

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

transformarTexto(texto, ".btn-negrito", "negrito");

transformarTexto(texto, ".btn-italico", "italico");

transformarTexto(texto, ".btn-sublinhado", "sublinhado");

document.querySelector(".btn-mudarCor").addEventListener('click', () => {
    corDoTexto.click();
})

corDoTexto.addEventListener('change', () => {
    texto.style.color = corDoTexto.value;
})

alinhamento(texto, "#alinhar-esquerda", "left");

alinhamento(texto, "#alinhar-centro", "center");

alinhamento(texto, "#alinhar-direita", "right");

document.querySelector('.btn-imprimir').addEventListener('click', () => {
    barraDeFerramentas.style.display = "none";
    window.print()
    barraDeFerramentas.style.display = "flex";
})

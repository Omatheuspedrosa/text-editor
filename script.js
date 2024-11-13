let fonte = document.querySelector("#fontes");
let texto = document.querySelector('#area-do-texto');
let tamanhoDaFonte = document.querySelector(".tamanho-da-fonte .form-control")
let corDoTexto = document.querySelector('#escolherCor');

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

transformarTexto(".btn-negrito", "negrito");

transformarTexto(".btn-italico", "italico");

transformarTexto(".btn-sublinhado", "sublinhado");

document.querySelector(".btn-mudarCor").addEventListener('click', ()=>{
    corDoTexto.click();
})

corDoTexto.addEventListener('change', ()=>{
    texto.style.color = corDoTexto.value;
})

function transformarTexto(elemento, classe){
    document.querySelector(elemento).addEventListener('click', () => {
        texto.classList.toggle(classe);
        document.querySelector(elemento).classList.toggle("ativo")
    });
}

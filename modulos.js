function limitarTamanhoFonte(valor) {
    return Math.max(1, Math.min(valor, 100));
};

function transformarTexto(texto, elemento, classe) {
    document.querySelector(elemento).addEventListener('click', () => {
        texto.classList.toggle(classe);
        document.querySelector(elemento).classList.toggle("ativo");
    });
};

function alinhamento(texto, elemento, posicao) {
    document.querySelector(elemento).addEventListener('click', () => {
        texto.style.textAlign = posicao;
    })
};

export {limitarTamanhoFonte, transformarTexto, alinhamento};

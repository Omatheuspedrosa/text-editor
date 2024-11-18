export function limitarTamanhoFonte(valor) {
    return Math.max(1, Math.min(valor, 100));
}

export function transformarTexto(texto, elemento, classe) {
    document.querySelector(elemento).addEventListener('click', () => {
        texto.classList.toggle(classe);
        document.querySelector(elemento).classList.toggle("ativo");
    });
}

export function alinhamento(texto, elemento, posicao) {
    document.querySelector(elemento).addEventListener('click', () => {
        texto.style.textAlign = posicao;
    })
}

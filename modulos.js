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

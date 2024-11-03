const fontes = [
    "Arial, Helvetica, sans-serif",
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
];

let fonte = document.querySelector("#fontes");
let texto = document.querySelector('#area-do-texto');

texto.addEventListener('input', ()=> {
    texto.style.fontFamily = "'Courier New', Courier, monospace";
})
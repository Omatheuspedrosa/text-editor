const fontes = [
    "Arial, Helvetica, sans-serif",
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
];

let fonte = document.querySelector("#fontes");
let texto = document.querySelector('#area-do-texto');

fonte.addEventListener('change', () => {
    for (let i = 0; i < fontes.length; i++) {
        if (fontes[i] == fonte.value) {
            texto.style.fontFamily = fonte.value;
        }
    }
})
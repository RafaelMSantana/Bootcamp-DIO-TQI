function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    corpo.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass);
}

function changeText() {
    const ligthMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    if (corpo.classList.contains(darkModeClass)) {
        botao.innerHTML = ligthMode;
        h1.innerHTML = darkMode + 'ON';
        return;
    }

    botao.innerHTML = darkMode;
        h1.innerHTML = ligthMode + 'ON';
}

const darkModeClass = 'dark-mode'
const botao = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const corpo = document.getElementsByTagName("body")[0];
// Se não colocar indice ele retorna uma coleção, foi testado na inspeção do html
const rodape = document.getElementById("rodapePg");

console.log(corpo)

botao.addEventListener('click', changeMode)

// Script para alternar entre dark e light mode

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-mode') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
}

// Evento de mudança no toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', '');
    }
});
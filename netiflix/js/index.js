console.log("Script index.js carregado com sucesso!");

// Adicionar evento de clique aos perfis
document.addEventListener('DOMContentLoaded', () => {
    const perfis = document.querySelectorAll('.perfil');
    
    perfis.forEach(perfil => {
        perfil.addEventListener('click', (event) => {
            // Obter o nome do perfil
            const nomePerfil = perfil.querySelector('p').textContent;
            
            // Obter a imagem do perfil
            const imagemPerfil = perfil.querySelector('img').src;
            
            // Armazenar no localStorage
            localStorage.setItem('perfilAtivoNome', nomePerfil);
            localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            
            console.log(`Perfil salvo: ${nomePerfil} - ${imagemPerfil}`);
        });
    });
});
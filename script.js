// Função que roda quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica do Modo Escuro (Dark Mode) ---
    const botaoTema = document.getElementById('toggle-tema');
    const corpo = document.body;

    botaoTema.addEventListener('click', () => {
        // Adiciona ou remove a classe 'dark-mode' do body
        corpo.classList.toggle('dark-mode');

        // Muda o texto do botão dependendo do tema atual
        if (corpo.classList.contains('dark-mode')) {
            botaoTema.textContent = "Tema Claro";
        } else {
            botaoTema.textContent = "Tema Escuro";
        }
    });

    // --- 2. Validação do Formulário ---
    const formulario = document.getElementById('form-contato');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o envio real para não recarregar a página

        // Pegando os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação Simples
        if (nome === '' || email === '' || mensagem === '') {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Validação de formato de E-mail (Regex simples)
        if (!email.includes('@') || !email.includes('.')) {
            alert("Por favor, insira um e-mail válido (exemplo@dominio.com)");
            return;
        }

        // Simulação de sucesso
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Limpar o formulário
        formulario.reset();
    });
});
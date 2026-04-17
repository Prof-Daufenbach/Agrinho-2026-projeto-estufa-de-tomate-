// Função para mostrar dicas ao clicar nos cards
function mostrarDica(tipo) {
    const alerta = document.getElementById('mensagem-alerta');
    const texto = document.getElementById('texto-alerta');
    
    let mensagens = {
        'tecnologia': "💡 Sabia? O uso de drones pode reduzir em até 40% o uso de defensivos agrícolas!",
        'preservacao': "🌳 O equilíbrio vem do respeito ao Código Florestal e Reservas Legais.",
        'solo': "🌱 O plantio direto evita a erosão e mantém a umidade da terra por mais tempo."
    };

    texto.innerText = mensagens[tipo];
    alerta.classList.remove('hidden');
}

// Botão para alternar modo claro/escuro
const btnTheme = document.getElementById('theme-toggle');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Adicione estilos para dark-mode no seu CSS se desejar expandir
    if(document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#e0e0e0';
    } else {
        document.body.style.backgroundColor = '#f4f9f4';
        document.body.style.color = '#2d4a22';
    }
});
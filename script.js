document.querySelectorAll('.btn').forEach(button => {
    // Efeito de feedback visual ao clicar
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });

    // Mensagem de log para analytics simples (opcional)
    button.addEventListener('mouseenter', () => {
        const info = button.getAttribute('data-info');
        if(info) console.log(`Dica UX: ${info}`);
    });
});

// Efeito de entrada suave dos botões
window.onload = () => {
    const links = document.querySelectorAll('.btn');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    yesButton.addEventListener('click', () => {
        alert('Eu também te amo muito 💖');
    });

    function moveNoButton(e) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const noButtonRect = noButton.getBoundingClientRect();

        // Distância mínima para o botão se afastar do mouse ou toque
        const distance = 100;

        // Calcular novas posições possíveis que mantêm o botão dentro da tela
        let newTop = Math.random() * (windowHeight - noButtonRect.height);
        let newLeft = Math.random() * (windowWidth - noButtonRect.width);

        // Garantir que a nova posição esteja distante o suficiente do cursor ou toque
        const mouseX = e.clientX || e.touches[0].clientX;
        const mouseY = e.clientY || e.touches[0].clientY;

        while (Math.abs(newLeft - mouseX) < distance || Math.abs(newTop - mouseY) < distance) {
            newTop = Math.random() * (windowHeight - noButtonRect.height);
            newLeft = Math.random() * (windowWidth - noButtonRect.width);
        }

        // Aplicar a nova posição
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;

        // Logar novas posições para depuração
        console.log(`Botão movido para: top=${newTop}, left=${newLeft}`);
    }

    noButton.addEventListener('mouseover', moveNoButton);
    noButton.addEventListener('touchstart', moveNoButton);
});
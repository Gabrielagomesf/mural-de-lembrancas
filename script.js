// Interatividade do Mural de Lembranças

// Mensagem animada ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        alert("Bem-vinda ao nosso Mural de Lembranças! ❤️");
    }, 500);
});

// Função para criar a surpresa ao clicar
const surpresaLink = document.getElementById("surpresa-link");

if (surpresaLink) {
    surpresaLink.addEventListener("click", (event) => {
        event.preventDefault();
        
        // Criação do overlay com a surpresa
        const body = document.body;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        // Criação da mensagem de surpresa
        const message = document.createElement("div");
        message.classList.add("surprise-message");
        message.innerHTML = "Surpresa! Você ganhou um rolê especial em um barzinho com tudo pago! 🥳🍻";

        // Criação do QR Code para o WhatsApp
        const qrCode = document.createElement("img");
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?data=https://wa.me/5519995555280&size=150x150";
        qrCode.alt = "QR Code para o WhatsApp";
        qrCode.classList.add("qr-code");

        // Criação do botão de fechar
        const closeButton = document.createElement("button");
        closeButton.textContent = "Fechar";
        closeButton.classList.add("close-button");

        closeButton.addEventListener("click", () => {
            overlay.remove();
        });

        // Adicionando os elementos à tela
        overlay.appendChild(message);
        overlay.appendChild(qrCode);
        overlay.appendChild(closeButton);
        body.appendChild(overlay);

        // Animação de entrada do overlay
        setTimeout(() => {
            overlay.classList.add("show");
        }, 50); // Delay para animação
    });
}

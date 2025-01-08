document.addEventListener("DOMContentLoaded", function () {
    // Lógica do menu hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            navLinks.classList.add('show');
        } else {
            navLinks.classList.remove('show');
        }
    });

    window.addEventListener('click', function (e) {
        if (!e.target.matches('#menu-icon, .nav-links, .nav-links *')) {
            menuToggle.checked = false;
            navLinks.classList.remove('show');
        }
    });

    // Lógica da Surpresa
    const surpresaLink = document.getElementById("surpresa-link");

    if (surpresaLink) {
        surpresaLink.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Criação da notificação
            const notification = document.createElement("div");
            notification.classList.add("notification");

            // Mensagem
            const message = document.createElement("p");
            message.innerHTML = "Surpresa! Você ganhou um rolê especial em um barzinho com tudo pago! 🥳🍻";

            // QR Code
            const qrCode = document.createElement("img");
            qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?data=https://wa.me/5519995555280&size=150x150";
            qrCode.alt = "QR Code para o WhatsApp";

            // Botão de fechar
            const closeButton = document.createElement("button");
            closeButton.textContent = "Fechar";
            closeButton.classList.add("close-button");

            closeButton.addEventListener("click", () => {
                notification.style.display = "none";
            });

            // Adiciona os elementos à notificação
            notification.appendChild(message);
            notification.appendChild(qrCode);
            notification.appendChild(closeButton);
            document.body.appendChild(notification);

            // Exibe a notificação com animação
            setTimeout(() => {
                notification.style.display = "flex";
            }, 50);
        });
    }
});

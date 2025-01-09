const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Surpresa funcionalidade
const surpresaLink = document.getElementById("surpresa-link");

if (surpresaLink) {
    surpresaLink.addEventListener("click", (event) => {
        event.preventDefault();
        
        const notification = document.createElement("div");
        notification.classList.add("notification");

        const message = document.createElement("p");
        message.innerHTML = "Surpresa! Você ganhou um rolê especial em um barzinho com tudo pago! 🥳🍻";

        const qrCode = document.createElement("img");
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?data=https://wa.me/5519995555280&size=150x150";
        qrCode.alt = "QR Code para o WhatsApp";

        const closeButton = document.createElement("button");
        closeButton.textContent = "Fechar";
        closeButton.classList.add("close-button");

        closeButton.addEventListener("click", () => {
            notification.style.display = "none";
        });

        notification.appendChild(message);
        notification.appendChild(qrCode);
        notification.appendChild(closeButton);
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.display = "flex";
        }, 50);
    });
}

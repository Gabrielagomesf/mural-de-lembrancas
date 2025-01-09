// Menu Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Surpresa funcionalidade
const surpresaLink = document.getElementById("surpresa-link");

surpresaLink.addEventListener("click", (event) => {
    event.preventDefault();

    const notification = document.createElement("div");
    notification.classList.add("notification");

    const phoneNumber = "+5519995555280"; // Seu número de WhatsApp
    const message = "Quero resgatar meu prêmio kkk. ❤️";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const qrCodeLink = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(whatsappLink)}&size=150x150`;

    notification.innerHTML = `
        <p>🎉 Surpresa! Você ganhou um rolê com tudo pago kk 🍻!</p>
        <p>Clique no botão abaixo ou escaneie o QR Code.</p>
        <img src="${qrCodeLink}" alt="QR Code para WhatsApp">
        <a href="${whatsappLink}" target="_blank" class="whatsapp-button">Enviar Mensagem no WhatsApp</a>
        <button class="close-button">Fechar</button>
    `;

    document.body.appendChild(notification);

    const closeButton = notification.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        notification.remove();
    });
});

// Funções do Player de Áudio
const audioPlayer = document.getElementById("audio-player");

function playPauseAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

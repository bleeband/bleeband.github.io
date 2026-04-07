// SIMULATION D'ENVOI DE FORMULAIRE

document.getElementById("form_contact").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(this);

    const nom = data.get("nom");
    const email = data.get("email");
    const sujet = data.get("sujet");
    const moment = data.get("moment");
    const newsletter = data.get("newsletter") ? "Oui" : "Non";
    const message = data.get("message");

    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");

    popup.style.display = "block";
    popupMessage.innerHTML = "⏳ Envoi en cours...";

    setTimeout(() => {
        popupMessage.innerHTML = `
        
            <h3>✅ Message envoyé</h3>
            <strong>Nom :</strong> ${nom}<br>
            <strong>Email :</strong> ${email}<br>
            <strong>Sujet :</strong> ${sujet}<br>
            <strong>Préférences de contact :</strong> ${moment || "Non spécifié"}<br>
            <strong>Newsletter :</strong> ${newsletter}<br>
            <strong>Message :</strong><br>
            ${message}
        `;
    }, 1000);

    this.reset();
});

document.getElementById("fermer").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
});

window.addEventListener("click", (e) => {
    const popup = document.getElementById("popup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
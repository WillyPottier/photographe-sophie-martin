/* FORMULAIRE */

const form = document.getElementById('contact-form');

function validateForm() {
    const name = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('telephone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 2) {
        alert('Le champ doit contenir au moins 2 caractères');
        return false;
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(`L'adresse email est invalide`);
        return false;
    };
    
    if (tel.length > 0) {
        const telRegex = /^[0-9\s]{10,}$/;
        if (!telRegex.test(tel)) {
            alert(`Le numéro de téléphone n'est pas valide`)
            return false;
        }
    }

    if (message.length < 10) {
        alert(`Votre message doit contenir au moins 10 caractères`)
        return false;
    }

    return true;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        alert(`Message envoyé avec succès !`)
        form.reset();
    };
});
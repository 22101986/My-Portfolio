
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupère les données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Envoie les données au serveur
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message envoyé avec succès!');
        } else {
            alert('Erreur lors de l\'envoi du message.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});
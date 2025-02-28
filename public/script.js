let isOK = false

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const send = document.getElementById("send")

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

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
            isOK = true
            document.getElementById('contact-form').reset()
            send.style.display = isOK ? "block" : "none"
            
            setTimeout(() => {
                send.style.display = "none"
                isOK = false
            }, 3000)
        } else {
            alert('Erreur lors de l\'envoi du message.')
        }
    })
    .catch(error => {
        console.error('Erreur:', error)
    })
})

document.getElementById('view').addEventListener('click', () => {
    const project = document.getElementById("projectView")
    const send = document.getElementById("send")
    
    send.style.display = "none"
    
    project.style.display = "block"
})
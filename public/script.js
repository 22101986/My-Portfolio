// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);

// Scroll reveal animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.title-line, .section-header, .project-card, .skill-item, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.title-line, .section-header, .project-card, .skill-item, .contact-info, .contact-form');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

window.addEventListener('scroll', animateOnScroll);

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
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
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Message envoyé avec succès !</p>
            `;
            contactForm.appendChild(successMessage);
            
            // Reset form
            contactForm.reset();
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        } else {
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    });
});

// Hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
        cursor.style.opacity = '0.2';
    });
    
    card.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.opacity = '1';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Typing animation
function initTypingAnimation() {
    const typingLines = document.querySelectorAll('.typing-line');
    
    typingLines.forEach((line, index) => {
        const text = line.getAttribute('data-text');
        line.textContent = ''; // Vide le contenu initial
        
        // Pour la deuxième ligne, on attend que la première finisse
        const delay = index * 3500;
        
        setTimeout(() => {
            if (index > 0) {
                line.style.opacity = '1'; // Rend visible la deuxième ligne
            }
            
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    line.style.borderRight = 'none'; // Enlève le curseur à la fin
                }
            }, 50); // Vitesse de typing
        }, delay);
    });
}

// Appeler cette fonction quand la page est chargée
document.addEventListener('DOMContentLoaded', initTypingAnimation);
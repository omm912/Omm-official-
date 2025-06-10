// scripts.js

document.addEventListener('DOMContentLoaded', () => { const menuToggle = document.getElementById('mobile-menu'); const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => { e.preventDefault(); const formData = new FormData(contactForm); const name = formData.get('name'); const email = formData.get('email'); const message = formData.get('message');

if (name && email && message) {
  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset();
} else {
  alert('Please fill in all fields before submitting.');
}

}); });


document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Email form handling
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const messageDiv = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showMessage('Please enter your email.', 'error');
    } else if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
    } else {
      showMessage('Thank you! We’ll notify you when we launch.', 'success');
      form.reset();
    }
  });

  function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `form-message ${type}`;
  }

  // Fade-in scroll animation
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});
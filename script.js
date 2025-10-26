// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Alerta de envio
document.querySelector('form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
});
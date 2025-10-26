// Rolagem suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Alerta simples de envio do formulário
document.querySelector('form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
});
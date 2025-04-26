// Menu hamburguer
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Botão voltar ao topo
const topoBtn = document.getElementById('topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topoBtn.style.display = 'block';
  } else {
    topoBtn.style.display = 'none';
  }
});

topoBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

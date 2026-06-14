const navbar = document.querySelector('.nav-bar');
const btnToggleBarra = document.getElementById('btn-barra-lateral');

let navbarFechada = false;

btnToggleBarra.addEventListener('click', () => {
  navbarFechada = true;
  navbar.classList.add('nav-fechada');
});

document.querySelector('.logo-img').addEventListener('click', () => {
  if (!navbarFechada) return;
  navbarFechada = false;
  navbar.classList.remove('nav-fechada');
});
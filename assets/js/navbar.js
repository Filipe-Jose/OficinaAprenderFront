const navbar          = document.querySelector('.nav-bar');
const btnToggleBarra  = document.getElementById('btn-barra-lateral');
const btnDashboard    = document.getElementById('btn-dashboard');
const btnAlunos       = document.getElementById('btn-alunos');
const btnAtividades   = document.getElementById('btn-atividades');
const btnComunicacao  = document.getElementById('btn-comunicacao');
const btnRelatorios   = document.getElementById('btn-relatorios');
const btnConquistas   = document.getElementById('btn-conquistas');

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

navegarCom(btnDashboard, "dashboard.html");
navegarCom(btnAlunos, "alunos.html");
navegarCom(btnAtividades, "atividades.html");
navegarCom(btnComunicacao, "comunicacao.html");
navegarCom(btnRelatorios, "relatorios.html");
navegarCom(btnConquistas, "conquistas.html");
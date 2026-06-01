const btnEntrar    = document.getElementById('btn-entrar');
const btnCadastrar = document.getElementById('btn-cadastrar');

btnEntrar.addEventListener('click', () => {
  const btnTexto = btnEntrar.querySelector(".btn-text");
  navegarCom(btnEntrar, 'login.html', btnTexto);
});

btnCadastrar.addEventListener('click', () => {
  const btnTexto = btnCadastrar.querySelector(".btn-text");
  navegarCom(btnCadastrar, 'cadastro.html', btnTexto);
});
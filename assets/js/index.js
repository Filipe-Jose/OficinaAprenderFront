const btnEntrar    = document.getElementById('btn-entrar');
const btnCadastrar = document.getElementById('btn-cadastrar');

btnEntrar.addEventListener('click', () => {
  navegarCom(btnEntrar, 'login.html');
});

btnCadastrar.addEventListener('click', () => {
  navegarCom(btnCadastrar, 'cadastro.html');
});

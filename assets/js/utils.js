const API_BASE = 'http://localhost:8080';

/* --- Requisições HTTP --------------------------------------- */
/** Faz uma requisição JSON para a API.
 * @param {string} rota - Caminho após o base URL (ex: '/auth/login')
 * @param {'GET'|'POST'|'PUT'|'DELETE'} metodo
 * @param {object|null} corpo - Objeto a ser enviado como JSON
 * @returns {Promise<{ok: boolean, status: number, dados: any}>}
 */
async function requisicaoAPI(rota, metodo = 'GET', corpo = null) {
  const opcoes = {
    method: metodo,
    headers: {'Content-Type': 'application/json'},
  };
  if (corpo) opcoes.body = JSON.stringify(corpo);

  const resposta = await fetch(API_BASE + rota, opcoes);
  const texto = await resposta.text();

  let dados;
  try {
    dados = JSON.parse(texto);
  } catch {
    dados = texto; // resposta de erro vem como texto puro
  }

  return { ok: resposta.ok, status: resposta.status, dados };
}

/* --- Token / Sessão ---------------------------------------- */
const Sessao = {
  salvar(token, email, role) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
  },
  limpar() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  },
  obterToken()  { return localStorage.getItem('token'); },
  obterEmail()  { return localStorage.getItem('email'); },
  obterRole()   { return localStorage.getItem('role'); },
  estaLogado()  { return !!localStorage.getItem('token'); },
};

/* --- Navegação --------------------------------------------- */

/** Redireciona o usuário com um pequeno estado de carregamento no botão.
 * @param {HTMLButtonElement} botao
 * @param {string} destino
 * @param {HTMLDivElement} btnTexto
 */
function navegarCom(botao, destino, btnTexto) {
  if (btnTexto) {
    const textoAntigo = btnTexto.textContent;
    btnTexto.textContent = "";
  }
  botao.classList.add('btn-carregando');
  botao.disabled = true;

  // usa setTimeout para o spinner aparecer antes do redirect
  try {
    setTimeout(() => {
    window.location.href = destino;
  }, 80);
  } finally {
    if (btnTexto) {
      btnTexto.textContent = textoAntigo;
    }
  }
}

/** Redireciona com base no role do usuário após o login.
 * @param {string} role
 */
function redirecionarPorRole(role) {
  const rotas = {
    ROLE_PROFISSIONAL: 'dashboard-profissional.html',
    ROLE_FAMILIA:      'dashboard-familia.html',
    ROLE_ESCOLA:       'dashboard-escola.html',
  };
  window.location.href = rotas[role] ?? 'index.html';
}

/* --- Inputs com label flutuante ---------------------------- */
/* Aplica o comportamento de label flutuante em todos os pares
 * input+label dentro de elementos .campo.
 */
function inicializarCampos() {
  document.querySelectorAll('.campo').forEach((campo) => {
    const input = campo.querySelector('input');
    const label = campo.querySelector('label');
    if (!input || !label) return;

    const atualizar = () => {
      const cheio = input.value !== '';
      label.classList.toggle('label-foco', cheio || document.activeElement === input);
      input.classList.toggle('input-foco', cheio || document.activeElement === input);
    };

    input.addEventListener('focus',  atualizar);
    input.addEventListener('blur',   atualizar);
    input.addEventListener('input',  atualizar);
    atualizar(); // estado inicial
  });
}

/* --- Exibir mensagem de erro no formulário ----------------- */
/** Mostra uma mensagem de erro abaixo do formulário.
 * Cria o elemento se ainda não existir.
 * @param {HTMLElement} formulario
 * @param {string} mensagem
 */
function exibirErroFormulario(formulario, mensagem) {
  let aviso = formulario.querySelector('.aviso-erro');
  if (!aviso) {
    aviso = document.createElement('p');
    aviso.className = 'aviso-erro';
    formulario.appendChild(aviso);
  }
  aviso.textContent = mensagem;
  aviso.style.display = 'block';
}

function limparErroFormulario(formulario) {
  const aviso = formulario.querySelector('.aviso-erro');
  if (aviso) aviso.style.display = 'none';
}

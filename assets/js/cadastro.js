// SVGs do botão de visibilidade de senha
const SVG_OLHO_ABERTO = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`;

const SVG_OLHO_FECHADO = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>`;

/* --- Elementos -------------------------------------------- */
const btnVoltar       = document.getElementById('btn-voltar');
const btnToggleSenha  = document.getElementById('toggle-senha');
const inputSenha      = document.getElementById('senha');
const formulario      = document.getElementById('form-cadastro');
const btnCadastrar    = document.getElementById('btn-cadastrar');

/* --- Label flutuante (utils.js) -------------------------- */
inicializarCampos();

/* --- Voltar para a página inicial -------------------------- */
btnVoltar.addEventListener('click', () => {
  navegarCom(btnVoltar, 'index.html');
});

/* --- Mostrar / ocultar senha ------------------------------ */
btnToggleSenha.innerHTML = SVG_OLHO_ABERTO;

btnToggleSenha.addEventListener('click', () => {
  const visivel = inputSenha.type === 'text';
  inputSenha.type = visivel ? 'password' : 'text';
  btnToggleSenha.innerHTML = visivel ? SVG_OLHO_ABERTO : SVG_OLHO_FECHADO;
  btnToggleSenha.setAttribute('aria-label', visivel ? 'Mostrar senha' : 'Ocultar senha');
});

/* --- Seleção de tipo de conta ------------------------------ */
const btnsTipo = document.querySelectorAll(".btn-tipo");
const inputRole = document.getElementById("role");
btnsTipo.forEach(btn => {
    btn.addEventListener("click", () => {
        btnsTipo.forEach(b => b.classList.remove("selecionado"));
        btn.classList.add("selecionado");
        inputRole.value = btn.dataset.role;
    })
})

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    limparErroFormulario(formulario);

    const nome  = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const role  = inputRole.value;

    if (!nome || !email || !senha || !role) {
        exibirErroFormulario(formulario, 'Preencha o e-mail e a senha.');
        return;
    }

    btnCadastrar.querySelector(".btn-text").textContent = "";
    btnCadastrar.classList.add('btn-carregando');
    btnCadastrar.disabled = true;

    try {
        const { ok, status, dados } = await requisicaoAPI('/usuarios/criar', 'POST', { email, senha, senha, role });

        if (ok) {
            Sessao.salvar(dados.token, dados.email, dados.role);
            redirecionarPorRole(dados.role);
        } else {
            const msg = typeof dados === 'string' ? dados : 'E-mail ou senha inválidos.';
            exibirErroFormulario(formulario, msg);
        }
    } catch (erro) {
        console.error('Erro de conexão:', erro);
        exibirErroFormulario(formulario, 'Não foi possível conectar ao servidor. Tente novamente.');
    } finally {
        btnEntrar.classList.remove('btn-carregando');
        btnCadastrar.querySelector(".btn-text").textContent = "Cadastrar";
        btnCadastrar.disabled = false;
    }
})

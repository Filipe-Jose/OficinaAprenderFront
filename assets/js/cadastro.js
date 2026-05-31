const API_URL = "http://localhost:8080";

// voltar para index
const btnVoltar = document.getElementById("btn-voltar");
btnVoltar.addEventListener("click", () => {
    btnVoltar.disabled = true;
    try {
        window.location.href = "index.html";
    } catch (erro) {
        console.error(erro);
    } finally {
        btnVoltar.disabled = false;
    }
})

// CSS dos inputs — mesma lógica do login
const inputs = document.querySelectorAll("input:not([type='hidden'])");
const labels = document.querySelectorAll("label");
for (i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let label = labels[i];

    input.addEventListener("focusin", () => {
        label.classList.add("label-focus");
        input.classList.add("input-focus");
    })

    input.addEventListener("focusout", () => {
        if (input.value === "") {
            label.classList.remove("label-focus");
            input.classList.remove("input-focus");
        }
    })
}

// toggleSenha
const btnToggleSenha = document.getElementById("toggleSenha")
const inputSenha = document.getElementById("senha")
btnToggleSenha.addEventListener('click', () => {
    const visible = inputSenha.type === 'text';
    inputSenha.type = visible ? 'password' : 'text';
    btnToggleSenha.textContent = visible ? '👁' : "🙈";
});

// seleção de tipo de conta
const btnsTipo = document.querySelectorAll(".btn-tipo");
const inputRole = document.getElementById("role");
btnsTipo.forEach(btn => {
    btn.addEventListener("click", () => {
        btnsTipo.forEach(b => b.classList.remove("selecionado"));
        btn.classList.add("selecionado");
        inputRole.value = btn.dataset.role;
    })
})

// envio do formulário
const form = document.getElementById("form-cadastro");
const btnCadastrar = document.getElementById("btn-cadastrar");
const erroMsg = document.getElementById("erro-msg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    erroMsg.textContent = "";

    const nome  = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const role  = inputRole.value;

    if (!nome || !email || !senha || !role) {
        erroMsg.textContent = "Preencha todos os campos.";
        return;
    }

    btnCadastrar.disabled = true;
    btnCadastrar.textContent = "Criando conta…";

    try {
        const resposta = await fetch(`${API_URL}/usuarios/criar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email, senha, role }),
        });

        if (resposta.ok) {
            window.location.href = "login.html";
        } else {
            const texto = await resposta.text();
            erroMsg.textContent = texto || "Erro ao criar conta. Tente novamente.";
        }
    } catch (erro) {
        console.error(erro);
        erroMsg.textContent = "Não foi possível conectar ao servidor.";
    } finally {
        btnCadastrar.disabled = false;
        btnCadastrar.textContent = "Criar conta";
    }
})

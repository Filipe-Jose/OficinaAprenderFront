
// voltar para index
const btnVoltar = document.getElementById("btn-voltar");
btnVoltar.addEventListener("click", () => {
    btnVoltar.disabled = true;
    try {
        window.location.href = "index.html";
    } catch (erro) {
        console.error(erro);
    } finally {
        btnVoltar.disabled = false
    }
})

// CSS dos inputs
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
for (i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let label = labels[i];

    input.addEventListener("focusin", () => {
        label.classList.add("label-focus");
        input.classList.add("input-focus")
    })

    input.addEventListener("focusout", () => {
        if (input.value === "") {
            label.classList.remove("label-focus");
            input.classList.remove("input-focus")
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
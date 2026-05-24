const btnEntrar = document.getElementById("btn-entrar");
const btnCadastrar = document.getElementById("btn-cadastrar");

btnEntrar.addEventListener("click", () => {
    btnEntrar.classList.add("btn-loading");
    btnEntrar.disabled = true;
    try {
        window.location.href = "login.html";
    } catch (erro) {
        console.error(erro);
    } finally {
        btnEntrar.classList.remove("btn-loading")
        btnEntrar.disabled = false
    }
})

btnCadastrar.addEventListener("click", () => {
    btnCadastrar.classList.add("btn-loading");
    btnCadastrar.disabled = true;
    try {
        window.location.href = "cadastro.html";
    } catch (erro) {
        console.error(erro);
    } finally {
        btnCadastrar.classList.remove("btn-loading")
        btnCadastrar.disabled = false
    }
})
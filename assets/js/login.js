btnVoltar = document.getElementById("btn-voltar");


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
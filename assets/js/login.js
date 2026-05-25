const btnVoltar = document.getElementById("btn-voltar");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

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

for (i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let label = labels[i];

    input.addEventListener("", () => {
        label.className = "label-focus";
    })

    input.addEventListener("focusin", () => {
        label.classList.add("label-focus");
    })

    input.addEventListener("mouseenter", () => {
        label.classList.add("label-focus");
    })

    input.addEventListener("focusout", () => {
        if (input.value === "") {
            label.classList.remove("label-focus");
        }
    })

    input.addEventListener("mouseout", () => {
        if (input.value === "") {
            label.classList.remove("label-focus");
        }
    })

    input.addEventListener("change", () => {
        if (input.value != "") {
            label.className = "label-focus";
        }
    })
}
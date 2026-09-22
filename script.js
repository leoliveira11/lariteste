const cartaFechada = document.getElementById("cartaFechada");
const cartaAberta = document.getElementById("cartaAberta");
const abrirCarta = document.getElementById("abrirCarta");
const fecharCarta = document.getElementById("fecharCarta");

abrirCarta.addEventListener("click", () => {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("aberto");

    cartaFechada.style.opacity = "0";
    cartaFechada.style.transform = "translateY(-20px)";

    setTimeout(() => {

        cartaFechada.style.display = "none";

        cartaAberta.style.display = "block";

        setTimeout(() => {
            cartaAberta.style.opacity = "1";
            cartaAberta.style.transform = "translateY(0)";
        }, 50);

    }, 500);
});

fecharCarta.addEventListener("click", () => {

    const envelope = document.querySelector(".envelope");

    envelope.classList.remove("aberto");

    cartaAberta.style.opacity = "0";
    cartaAberta.style.transform = "translateY(20px)";

    setTimeout(() => {

        cartaAberta.style.display = "none";

        cartaFechada.style.display = "flex";

        setTimeout(() => {
            cartaFechada.style.opacity = "1";
            cartaFechada.style.transform = "translateY(0)";
        }, 50);

    }, 700);
});
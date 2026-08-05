document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".navbar");
    const botao = document.getElementById("menu-toggle");
    const icone = botao.querySelector("i");
    const links = document.querySelectorAll(".navbar a");
    const logo = document.querySelector(".logo");

    function abrirMenu() {
        menu.classList.add("active");
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-xmark");
        document.body.style.overflow = "hidden";
    }

    function fecharMenu() {
        menu.classList.remove("active");
        icone.classList.remove("fa-xmark");
        icone.classList.add("fa-bars");
        document.body.style.overflow = "";
    }

    botao.addEventListener("click", () => {
        if (menu.classList.contains("active")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    links.forEach(link => {
        link.addEventListener("click", fecharMenu);
    });

    if (logo) {
        logo.addEventListener("click", fecharMenu);
    }

    document.addEventListener("click", (e) => {
        if (
            menu.classList.contains("active") &&
            !menu.contains(e.target) &&
            !botao.contains(e.target)
        ) {
            fecharMenu();
        }
    });

});
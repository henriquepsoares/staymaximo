// ==========================================
// STAYMAXIMO SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // MENU MOBILE
    // ==========================

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        const icon = menuToggle.querySelector("i");

        // Abrir/Fechar menu
        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

        // Fecha ao clicar em um link
        document.querySelectorAll(".navbar a").forEach(function(link){

            link.addEventListener("click", function(){

                navbar.classList.remove("active");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

        // Fecha clicando fora do menu
        document.addEventListener("click", function(e){

            if(
                navbar.classList.contains("active") &&
                !navbar.contains(e.target) &&
                !menuToggle.contains(e.target)
            ){

                navbar.classList.remove("active");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    // ==========================
    // LANGUAGE SELECTOR
    // ==========================

    const languageButton = document.querySelector(".language-selector button");
    const languageBox = document.querySelector(".language-selector");

    if(languageButton && languageBox){

        languageButton.addEventListener("click", function(e){

            e.stopPropagation();
            languageBox.classList.toggle("active");

        });

        document.addEventListener("click", function(){

            languageBox.classList.remove("active");

        });

    }

});

// Fecha o menu ao clicar na logo
const logo = document.querySelector(".logo");

if (logo) {
    logo.addEventListener("click", function () {
        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
}
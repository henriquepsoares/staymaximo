// StayMaximo - Language Selector

document.addEventListener("DOMContentLoaded", function () {

    const languageSelect = document.getElementById("languageSelect");

    if (languageSelect) {

        languageSelect.addEventListener("change", function () {

            const language = this.value;


            localStorage.setItem(
                "staymaximo_language",
                language
            );


            console.log(
                "Idioma selecionado:",
                language
            );


        });



        // recuperar idioma salvo

        const savedLanguage = localStorage.getItem(
            "staymaximo_language"
        );


        if(savedLanguage){

            languageSelect.value = savedLanguage;

        }

    }


});




// StayMaximo - Language Dropdown Mobile/Desktop

document.addEventListener("DOMContentLoaded", function(){


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




// StayMaximo - Mobile Menu

document.addEventListener("DOMContentLoaded", function(){


    const menuToggle = document.getElementById("menu-toggle");

    const navbar = document.querySelector(".navbar");


    if(menuToggle && navbar){


        menuToggle.addEventListener("click", function(){


            navbar.classList.toggle("active");


        });


    }


});

console.log("MENU SCRIPT CARREGADO");

const botao = document.getElementById("menu-toggle");
const menu = document.querySelector(".navbar");

if(botao){

botao.onclick = function(){

console.log("CLIQUE NO MENU");

menu.classList.toggle("active");

}

}
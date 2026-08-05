// StayMaximo - Language Selector

document.addEventListener("DOMContentLoaded", function () {

    const languageSelect = document.getElementById("languageSelect");

    if (!languageSelect) return;


    languageSelect.addEventListener("change", function () {

        const language = this.value;


        localStorage.setItem(
            "staymaximo_language",
            language
        );


        // futura ligação com arquivos de tradução
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


});

document.addEventListener("DOMContentLoaded", function(){


const languageButton = document.querySelector(".language-selector button");

const languageBox = document.querySelector(".language-selector");


if(languageButton){


languageButton.addEventListener("click", function(e){

    e.stopPropagation();

    languageBox.classList.toggle("active");

});


}



document.addEventListener("click", function(){

    languageBox.classList.remove("active");

});



});
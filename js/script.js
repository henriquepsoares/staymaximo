document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("menu-toggle");
    const menu = document.querySelector(".navbar");

    botao.onclick = function () {

        menu.classList.toggle("active");

    };

});
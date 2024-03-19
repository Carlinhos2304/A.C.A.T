// JavaScript para manejar el clic en los botones de "Leer más"
document.querySelectorAll(".leer-mas").forEach(function(button) {
    button.addEventListener("click", function () {
        var sectionContainer = button.closest(".info-section-nuevo");
        sectionContainer.querySelector(".contenidoAdicional").style.display = "block";
        button.style.display = "none";
        sectionContainer.querySelector(".ocultar-texto").style.display = "inline-block";
    });
});

// JavaScript para manejar el clic en los botones de "Ocultar texto"
document.querySelectorAll(".ocultar-texto").forEach(function(button) {
    button.addEventListener("click", function () {
        var sectionContainer = button.closest(".info-section-nuevo");
        sectionContainer.querySelector(".contenidoAdicional").style.display = "none";
        sectionContainer.querySelector(".leer-mas").style.display = "inline-block";
        button.style.display = "none";
    });
});






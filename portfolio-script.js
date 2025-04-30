function afficherDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Optionnel : rendre les détails masqués au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    var details = document.querySelectorAll(".details");
    details.forEach(function(detail) {
        detail.style.display = "none";
    });
});

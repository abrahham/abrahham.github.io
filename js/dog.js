function cambiarPanel(clase) {
    var paneles = document.querySelectorAll(".panel");
    paneles.forEach(panel => panel.style.display = 'none');
    document.querySelector(`.p-${clase}`).style.display = 'block';    
}
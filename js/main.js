var botones = document.querySelectorAll('#dash button');
var paneles = document.querySelectorAll('.panel');
botones.forEach((boton, idx) => {
    boton.classList.remove('selected');
    boton.addEventListener('click', () => {
        paneles.forEach(panel => panel.style.display = 'none');
        paneles[idx].style.display = 'block';
        boton.classList.add('selected');
    });
});
botones[0].classList.add('selected');


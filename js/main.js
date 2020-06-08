var botones = document.querySelectorAll('#dash button');
var paneles = document.querySelectorAll('.panel');
botones.forEach((boton, idx) => {
    boton.addEventListener('click', () => {
        botones.forEach(boton => boton.classList.remove('selected'));
        paneles.forEach(panel => panel.style.display = 'none');
        paneles[idx].style.display = 'block';
        boton.classList.add('selected');
    });
});
botones[0].classList.add('selected');


import { renderPage } from './fetch-data.js'

const buttonspage=document.querySelectorAll('.paginacion button')
        
buttonspage.forEach(button => {
    button.addEventListener('click', function () {
        const pageValue = parseInt(button.value)
        if(!pageValue) return; // Si apretaron < o > lo ignoramos por ahora
        
        // Llamamos a la función de fetch-data.js para dibujar esa página
        renderPage(pageValue)

        // Pintamos de azul el botón seleccionado
        buttonspage.forEach(btn => btn.classList.remove('activo'))
        button.classList.add('activo')
    })
})
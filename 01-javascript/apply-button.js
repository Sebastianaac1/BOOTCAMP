//const boton = document.querySelector('#boton-importante')
//esto es solo para un envento osea solo un boton
/*const botones = document.querySelectorAll('.btn-aplicar')
//esto es para tomar varios eventos como son todos lo botones pero lo extrae como lista
//por lo que hacemos esto para que recorra de forma automatica

botones.forEach(boton => {
    boton.addEventListener('click', function () {
        boton.textContent = 'Aplicado'
        //boton.style.backgroundColor = '#4caf50'//esto es parte de estilos por lo que va en css
        //boton.style.cursor = 'not-allowed'//lo mismo aca
        boton.classList.add('is-applied')
        boton.disabled = true

    })
})*/
//esto es un evento al click pero
//si esta asi no hay un evento que lo llame solo la creacion lectura de la misma


//hay una tercera forma mas habil y actual de hacerla

const JobsListingSection = document.querySelector('.resultados')//elemento padre

JobsListingSection?.addEventListener('click', function (event) {//a esta funcion recibe el evento del click
    //lo que hace el ? es preguntar si existe es como un if 
    // (JobsListingSection !== null && JobsListingSection !== undefined) 
    // y poner dentro lo de abajo pero es mejor esto del ?
    const element = event.target//me dice en que elemento se hizo click

    if (element.classList.contains('btn-aplicar')) {
        element.textContent = 'Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
        return; // Esto detiene la ejecución para que no abra los detalles de la oferta al hacer click en Aplicar
    }
    
    // .closest() busca si diste click en la tarjeta, o en cualquier hijo dentro de ella (título, texto, etc.)
    const card = element.closest('.empleo-card');
    if (card) {
        window.location.href = './detalles-de-la-oferta.html'
    }
})
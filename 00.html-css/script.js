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

JobsListingSection?.addEventListener('click', function(event) {//a esta funcion recibe el evento del click
    //lo que hace el ? es preguntar si existe es como un if 
    // (JobsListingSection !== null && JobsListingSection !== undefined) 
    // y poner dentro lo de abajo pero es mejor esto del ?
    const element=event.target//me dice en que elemento se hizo click

    if(element.classList.contains('btn-aplicar')){
        element.textContent = 'Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
    if(element.classList.contains('empleo-card' && 'empleo-info')){
        window.location.href = './detalles-de-la-oferta.html'
        console.log(element)
        //console.log(element.querySelector('.info').textContent)
    }
})

const filtert = document.querySelector('#filter-technology')

filtert.addEventListener('change', function() {
    console.log(filtert.value)
})

const filterl = document.querySelector('#filter-location')

filterl.addEventListener('change', function() {
    console.log(filterl.value)
})

const filterc = document.querySelector('#filter-contract-type')

filterc.addEventListener('change', function() {
    console.log(filterc.value)
})

const filtere = document.querySelector('#filter-experience-level')

filtere.addEventListener('change', function() {
    console.log(filtere.value)
})

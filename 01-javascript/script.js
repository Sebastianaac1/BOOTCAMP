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

const filtert = document.querySelector('#filter-technology')

filtert.addEventListener('change', function () {
    console.log(filtert.value)
})

const filterl = document.querySelector('#filter-location')

filterl.addEventListener('change', function () {
    console.log(filterl.value)
})

const filterc = document.querySelector('#filter-contract-type')

filterc.addEventListener('change', function () {
    console.log(filterc.value)
})

const filtere = document.querySelector('#filter-experience-level')

filtere.addEventListener('change', function () {
    console.log(filtere.value)
})

const searchForm = document.querySelector('#filter-location')
//const jobs = document.querySelectorAll('.empleo-card')
//al crear esto fuera de lo siguiente no alcanza a escuchar cuando se crea el job
//console.log(jobs)
//esto recupera todos los empleos de sus tarjetas
searchForm.addEventListener('change', function () {
    const selectedValue = searchForm.value
    const jobs = document.querySelectorAll('.empleo-card')
    //por esto se mueve aca para que pueda escuchar cuando se crea el job
    //esto es lo que dice el nombre que no hara lo default de html y hara lo de abajo
    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad
        const isShow=selectedValue===''||selectedValue===modalidad
        job.classList.toggle('is-hiden', isShow===false)//la mejor forma es esta ya que 
        //es mas limpia y no necesita tanto codigo y es mas eficiente
        //console.log(job.dataset.technology)
        /*if (selectedValue === '' || selectedValue === modalidad) {
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }*/
    })
})

const container = document.querySelector('.entero')
fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then((jobs) => {
        console.log(jobs);
        jobs.forEach(job => {
            const article =document.createElement('article')
            article.className='empleo-card'
            article.dataset.modalidad=job.data.modalidad
            article.dataset.nivel=job.data.nivel
            article.dataset.technology=job.data.technology//todo esto el del json pero 
            //es para sacar el sub "json" data
            article.innerHTML=`<div>
                <h3>${job.titulo}</h3>
                <small class="empresa">${job.empresa} | ${job.ubicacion}</small>
                <p>${job.descripcion}</p>
            </div>
            <button class="btn-aplicar">Aplicar</button>`

            container.appendChild(article)
        });
    });


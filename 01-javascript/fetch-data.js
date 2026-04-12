const container = document.querySelector('.entero')

const RESULTS_PER_PAGE=3

fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then((jobs) => {
        console.log(jobs);
        jobs.slice(0,RESULTS_PER_PAGE).forEach(job => {
            //esto hace que corte de 0 a 3 osea de 3 en 3 los articles creados dentro del for
            const article =document.createElement('article')
            article.className='empleo-card'
            article.dataset.titulo=job.titulo
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

            container?.appendChild(article)
        });
        
    });

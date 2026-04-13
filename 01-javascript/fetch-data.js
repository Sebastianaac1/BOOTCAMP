const container = document.querySelector('.entero')
const RESULTS_PER_PAGE = 5

// 1. Exportamos un "molde" vacío del container de arriba que es .entero de empleos.
// De esta manera paginacion.js puede importar 'renderPage' sin que de error.
export let renderPage = function(page) { };
//esto con el fin de que paginacion.js pueda importar renderPage sin que de error
//ya que con const da error por que no es una constante si no que cambiante
fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then((jobs) => {
        
        // 2. Ahora que ya tenemos los "jobs", rellenamos el molde con la función real.
        renderPage = function(page) {
            // Borramos el HTML viejo
            container.innerHTML = '';
            
            // Calculamos la matemática
            const startIndex = (page - 1) * RESULTS_PER_PAGE;
            const endIndex = startIndex + RESULTS_PER_PAGE;
            
            // Cortamos el JSON y creamos los articles
            jobs.slice(startIndex, endIndex).forEach(job => {
                const article =document.createElement('article')
                article.className='empleo-card'
                article.dataset.titulo=job.titulo
                article.dataset.modalidad=job.data.modalidad
                article.dataset.nivel=job.data.nivel
                article.dataset.technology=job.data.technology
                
                article.innerHTML=`<div>
                    <h3>${job.titulo}</h3>
                    <small class="empresa">${job.empresa} | ${job.ubicacion}</small>
                    <p>${job.descripcion}</p>
                </div>
                <button class="btn-aplicar">Aplicar</button>`

                container.appendChild(article)
            });
        }
        
        // 3. Apenas cargue la data, dibujamos la primera página para que no se vea vacío
        renderPage(1);
    });

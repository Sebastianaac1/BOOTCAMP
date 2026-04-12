// Seleccionamos TODOS los selects que están dentro de .filtros
const selects = document.querySelectorAll('.filtros select')

// Le agregamos el evento 'change' a cada uno de esos selects
selects.forEach(select => {
    select.addEventListener('change', function () {
        
        // Obtenemos qué tienen seleccionado actualmente los dos filtros importantes
        // (Al inicio valen "Ubicación" y "Nivel de experiencia" porque no tienen value="")
        const locationValue = document.querySelector('#filter-location').value
        const experienceValue = document.querySelector('#filter-experience-level').value
        const technologyValue = document.querySelector('#filter-technology').value
        console.log(technologyValue)
        const jobs = document.querySelectorAll('.empleo-card')

        jobs.forEach(job => {
            // Sacamos los datos de la tarjeta
            const modalidad = job.dataset.modalidad
            const nivel = job.dataset.nivel
            const technology = job.dataset.technology
            
            // Comprobamos si el trabajo aprueba el filtro de ubicación
            // Aprueba si no se ha filtrado nada (vale "Ubicación") o si coincide con la modalidad
            const matchLocation = locationValue === 'Ubicación' || locationValue === modalidad

            // Comprobamos si el trabajo aprueba el filtro de experiencia
            const matchExperience = experienceValue === 'Nivel de experiencia' || experienceValue === nivel
            
            //comprobamos si el trabajo aprueba el filtro de tecnologia
            // IMPORTANTE: Como en el JSON el technology es un array ['react', 'node'], cuando HTML lo
            // pasa al dataset lo convierte a texto así: "react,node".
            // Para ver si pasa el filtro, preguntamos si ESA tira de texto INCLUYE la tecnología que buscas.
            const matchTechnology = technologyValue === 'Tecnología' || (technology && technology.includes(technologyValue))
                                                                        //esto es que el dataset Contiene la informacion del filtro
            
            // Para mostrarse (isShow), debe pasar TODOS los filtros
            const isShow = matchLocation && matchExperience && matchTechnology
            
            job.classList.toggle('is-hiden', isShow === false)
        })
    })
})
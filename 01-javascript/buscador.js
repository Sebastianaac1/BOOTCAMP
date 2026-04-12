const searchForm = document.querySelector('.hero-empleos form')
//esto esta seleccionando el section completo pero el form especificamente
const searchInput = searchForm.querySelector('input')
//esto hace que solo busque en el searchform y especificamente el evento input 
//osea nuestra barra

searchForm?.addEventListener('submit', function(event){
    // Evita que la página se recargue al presionar Enter en el formulario
    event.preventDefault()

    // Obtenemos el valor del input en minúsculas para hacer una búsqueda flexible
    const selectedValue = searchInput.value.toLowerCase().trim()
    const jobs = document.querySelectorAll('.empleo-card')
    console.log(selectedValue)
    jobs.forEach(job => {
        const titulo = job.dataset.titulo ? job.dataset.titulo.toLowerCase() : ''
        
        // Verificamos si no se escribió nada o si el título incluye lo que se buscó
        const isShow = selectedValue === '' || titulo.includes(selectedValue)
        //esto cambia a los filtro por que es como que incluye pero no es igual
        //const isShow = selectedValue === '' || selectedValue===titulo

        // Alternamos la clase para ocultar si isShow es falso
        job.classList.toggle('is-hiden', isShow === false)
    })
})

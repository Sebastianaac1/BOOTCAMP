class DevJobsAvatar extends HTMLElement{
    constructor(){
        super();//llamar al constructor de HTMLElement

        this.attachShadow({ mode:'open'})//esto hace que los estilos de js 
        //hagan efecto pero no los de afuera osea ejemplo los de css
        //osea solo los de adentro que es shadowroot creamos una especie de 
        //burbuja propia para el avatar
    }
    createUrl(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }

    render(){
        //para recuperar cosas para que dependa nuestra imagen seria algo asi
        const service = this.getAttribute('service') ?? 'github'//el ?? es por si no 
        //existe que ponga github
        const username = this.getAttribute('username') ?? 'midudev'
        const size = this.getAttribute('size') ?? '40'

        const url =this.createUrl(service,username)

        this.shadowRoot.innerHTML=`
        <style>
            img {
                width: ${size}px;
                height: ${size}px;
                border-radius: 9999px;
            }
        </style>
        <img 
            src="${url}"
            alt="Avatar de ${username}"
            class="avatar"
        />`
    }//esto es que renderice la imagen del avatar pero falta cuando se crea el elemento
    connectedCallback(){
        this.render()
    }
    //esto sirve hasta para empresas en los empleos
}

customElements.define('devjobs-avatar', DevJobsAvatar)//esto le indica que queremos 
//llamar al devjobs-avatar de arriba
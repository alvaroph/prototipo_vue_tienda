import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { getLibros , getZapatillas} from './communicationManager.js'

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      divActual: 'portada',
      libros: [],
      zapatillas: [],
      comandaActual:{
          preuTotal: 0,
          productes: []
      }
    }
    },
    methods: {
      cambiarDiv(id) {
        this.divActual=id;
      },
      mostrar(id) {
        return (this.divActual==id);
      },
      afegir(id){
        this.comandaActual.productes.push(id);
      }
    },
   created(){
       getLibros().then(libros => {
        this.libros = libros;   
    })

    getZapatillas().then(z => {
      this.zapatillas = z;   
  })
}
    
  
}).mount('#app')
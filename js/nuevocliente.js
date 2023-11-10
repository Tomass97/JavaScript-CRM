import {mostrarAlerta} from './funciones.js'
import { nuevoCliente } from './API.js';

(function() {

    const formulario = document.querySelector ('#formulario');

    formulario.addEventListener('submit', validarCliente)


   async function validarCliente(e) {
        e.preventDefault()

          const nombre    = document.querySelector ('#nombre').value;
          const email     = document.querySelector ('#email').value;
          const telefono  = document.querySelector ('#telefono').value;
          const empresa   = document.querySelector ('#empresa').value;
          
          // Los id los genera automaticamente json-server
      
          // Validacion de campos vacios
          // Object Literal Enhacement con los valores de los inputs
          const cliente = { nombre, email, telefono, empresa }
  
          // Si algun campo esta vacio
          if ( validarInputsCliente( cliente ) ){
  
              // Muestra mensaje en el HTML
              mostrarAlerta( 'Todos los campos son obligatorios' );
              return;
          }

          await nuevoCliente(cliente)

          window.location.href = 'index.html'

    }

    function validarInputsCliente ( objetoCliente ) {

        return !Object.values( objetoCliente ).every( propiedad => propiedad !== '' );
    
    } 

})()
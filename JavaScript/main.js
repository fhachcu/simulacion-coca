import {obtenerNumero } from "./NumerosAleatorios/congruencialAditivo.js";
import {obtenerNumero as mixto} from "./NumerosAleatorios/congruencialMixto.js";
import { uniforme, normal, binomial } from "./distribuciones.js";
import {poisson} from './auxiliares.js';
import {recorrerMeses} from './simulacion.js'



document.getElementById('button').addEventListener('click',()=>{

  console.log("El derrame en un Trimestre es",recorrerMeses());


   
});

import {obtenerNumero as aditivo} from './NumerosAleatorios/congruencialAditivo.js';

export const poisson = (cantEvento) =>{
  
    let b = 1.8617e-323;
  
    let x = 0;
    let p = 1;

    while (p>b) {
        let aleatorio = aditivo();
        p = p*aleatorio;
        x++;
     
    }
    
     p = 1;
     b = 1.8617e-323;

    while (p>b) {
        let aleatorio = aditivo();
        p = p*aleatorio;
        x++;
    }

    p = 1;
    b = 1.8617e-136;

   while (p>b) {
       let aleatorio = aditivo();
       p = p*aleatorio;
       x++;
   }


    return x;
}
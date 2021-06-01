import { obtenerNumero as aditivo } from "./NumerosAleatorios/congruencialAditivo.js";
import { obtenerNumero as mixto } from "./NumerosAleatorios/congruencialMixto.js";

export const uniforme = (min,max,aleatorio) => {
    
    return (min + (max - min)*aleatorio); 

}

export const normal = (media, desviación) => {
    let sum = 0;
    let x = 0;
    let aleatorio = 0;

    for (let i=0;  i<12; i++){
        aleatorio = aditivo();
        sum = sum + aleatorio;
    }
        
    x = desviación*(sum - 6) + media;
    
    return x;

}

export const binomial = () =>{
    
    let acumulada = 0.98;
    //Obtenemos el número aleatorio llamando a la funcion obtenerNumero();
    let aleatorio = aditivo();
    let derrame = 0;

    //Armamos la disribución de binomial
    if(aleatorio <= acumulada){
      //console.log("Entro en la binomial");
        //Obtenemos otro número aleatorio para luego usarlo en la distribución uniforme
      let aleatorio = aditivo();  
      derrame = uniforme(0.01, 0.5,aleatorio);
      
    }

    return derrame;
}


export const poisson = (cantEvento) =>{
  
    let correccion = (Math.abs(cantEvento)/745);
    if(correccion<1) correccion = 1;
    

    let b = Math.exp(-cantEvento/correccion);
  
    let x = 0;
    let p = 1;

    while (p>b) {
        let aleatorio = aditivo();
        p = p*aleatorio;
        x++;
    }

    return x*correccion;
}




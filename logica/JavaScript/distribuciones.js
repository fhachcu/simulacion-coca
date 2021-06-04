import { obtenerNumero as aditivo } from "./NumerosAleatorios/congruencialAditivo.js";
import { obtenerNumero as mixto } from "./NumerosAleatorios/congruencialMixto.js";


// Distribución uniforme
export const uniforme = (min,max,aleatorio) => {

    return (min + (max - min)*aleatorio); 

}

//Distribución normal
export const normal = (media, desviación) => {
    //Iniciamos la variable sum en 0, es el acumulador del números aleatorios
    let sum = 0;
    //Iniciamos la variable x en 0, es valor de retorno de la distribución
    let x = 0;
    //Iniciamos la variable aleatorio en 0, contiene al núemro aleatorio
    let aleatorio = 0;

    //Realizamos un ciclo for
    for (let i=0;  i<12; i++){
        //Obtenemos un número aleatorio
        aleatorio = aditivo();
        //Vamos acumulando en número aleatorio
        sum = sum + aleatorio;
    }
        
    //Obtenemos el número que retorna la distribución a partir de la desviación, la variable 
    //sum y la media
    x = desviación*(sum - 6) + media;
    
    return x;

}

//Distribución binomial
export const binomial = () =>{
    
    //Probabilidad acumulada de acuerdo al enunciado
    let acumulada = 0.98;
    //Obtenemos el número aleatorio llamando a la funcion obtenerNumero();
    let aleatorio = aditivo();
    //Iniciamos la variable de derrame en 0
    let derrame = 0;

    //Armamos la disribución binomial
    if(aleatorio <= acumulada){
        //Obtenemos otro número aleatorio para luego usarlo en la distribución uniforme
      let aleatorio = aditivo();
      //Llamamos a la distribución uniforme aquí porque así lo especifica el enunciado; aquí obtenemos el derrame por lata
      derrame = uniforme(0.01, 0.5,aleatorio);
      
    }

    return derrame;
}

//Distribución de poisson
export const poisson = (cantEvento) =>{
  
    //Definimos un factor de correción pues el lenguaje solo llega a e-323
    let correccion = (Math.abs(cantEvento)/745);
    if(correccion<1) correccion = 1;
    
    //Obtenemos el número b a partir de elevar el número e en la cantidad 
    //de eventos, multiplicarlo por -1 y dividirlo por el factor de correción
    let b = Math.exp(-cantEvento/correccion);
    
    //Declaramos e iniciamos la variable x, que es la cantidad de éxitos en el continuo
    let x = 0;
    //Declaramos en iniciamos la variable p en 1
    let p = 1;

    //Realizamos un ciclo while
    while (p>b) {
        //Obtenemos un número aleatorio
        let aleatorio = aditivo();
        //Realizamos el producto de p por el número aleatorio 
        p = p*aleatorio;
        //Aumentamos la variable x (cantidad de éxitos en el continuo)
        x++;
    }

    //Retornamos la variable multiplicada por el factor de correción
    return x*correccion;
}




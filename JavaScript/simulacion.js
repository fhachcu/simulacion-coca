import {binomial, poisson, normal} from './distribuciones.js';   


let derrame = 0;
let derrameMensual = 0;
let binomialAux;

const datos = {
    derrame:0,
    latasAllenar:0,
    perdidaJarabeDinero:0,
    ventaLatas: 0
}

export function recorrerMeses(){

    let costoTotalLata = 0;

    for(let i=0; i<3; i++){
        
        recorrerDias();
        let costoDerramemMensual = Math.round(normal(17,3),-2);
        costoTotalLata = costoTotalLata +(costoDerramemMensual*(derrameMensual/354));
           
    }

    datos.derrame = Math.round(derrame,-2);
    datos.latasAllenar = Math.trunc(derrame/354);
    datos.perdidaJarabeDinero = Math.round(costoTotalLata,-2);
    datos.ventaLatas = datos.latasAllenar * 60; 
    return datos;
}

function recorrerDias(){
    
    derrameMensual = 0;

    for(let i=0; i<20; i++){
        recorrerHoras();
    }
}

function recorrerHoras(){
    for(let i=0; i<8; i++){
        recorrerMinutos();
    }
}

function recorrerMinutos(){
    for(let i=0; i<60; i++){
        let latas = poisson(1800);
        for(let x = 0; x<latas; x++){
            let binomialAux = binomial();
            derrame = derrame + binomialAux;
            derrameMensual = derrameMensual + binomialAux;
        }
    }
}
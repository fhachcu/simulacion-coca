import {binomial, poisson} from './distribuciones.js';   


let derrame = 0;

export function recorrerMeses(){

    for(let i=0; i<3; i++){
        
        recorrerDias();
        
        
        
    }
    return ((derrame/354));
}

function recorrerDias(){
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
            derrame = derrame + binomial();
        }
    }
}
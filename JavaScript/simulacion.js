import {binomial, poisson, normal} from './distribuciones.js';   


let derrame = 0;
let derrameMensual = 0;
let derrameSemanal = 0;
let binomialAux;
let numSemana = 0;

const datosTrimestral = {
    derrame:0,
    latasAllenar:0,
    perdidaJarabeDinero:0,
    ventaLatas: 0
}

const datosMensual = {
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
        
        //Datos mensuales
        datosMensual.derrame = Math.round(derrameMensual,-2);
        datosMensual.latasAllenar =  Math.trunc(derrameMensual/354);
        datosMensual.perdidaJarabeDinero = Math.trunc(costoDerramemMensual*(derrameMensual/354),-2);
        datosMensual.ventaLatas = datosMensual.latasAllenar * 60;
        
        console.log('datosMensual',{...datosMensual})
    }

        //Dato trimestral
        datosTrimestral.derrame = Math.round(derrame,-2);
        datosTrimestral.latasAllenar = Math.trunc(derrame/354);
        datosTrimestral.perdidaJarabeDinero = Math.round(costoTotalLata,-2);
        datosTrimestral.ventaLatas = datosTrimestral.latasAllenar * 60; 
        console.log('numSemana: ',numSemana);



        return datosTrimestral;


}

function recorrerDias(){
    
    let semana = 1;
    derrameMensual = 0;

    for(let i=0; i<20; i++){

        recorrerHoras();
        if(semana == 5){
            numSemana++;
            semana = 1;
            console.log("Derrame semanal", derrameSemanal);
            derrameSemanal = 0;
        }
        semana ++;
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
                derrameSemanal = derrameSemanal + binomialAux;
        }
    }
}
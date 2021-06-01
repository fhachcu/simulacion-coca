import {binomial, poisson, normal} from './distribuciones.js';   

//Vriables
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

const storageMeses = [];
const storageSemanas = [];
const storageTrimestre = [];

//**********---------**************

export function recorrerMeses(){

    let costoTotalLata = 0;

    for(let i=0; i<3; i++){
        
        recorrerDias();
        let costoDerramemMensual = normal(17,3);
        costoTotalLata = costoTotalLata +(costoDerramemMensual*(derrameMensual/354));   
        
        //Datos mensuales
        datosMensual.derrame = derrameMensual;
        datosMensual.latasAllenar =  Math.trunc(derrameMensual/354);
        datosMensual.perdidaJarabeDinero = costoDerramemMensual*(derrameMensual/354);
        datosMensual.ventaLatas = datosMensual.latasAllenar * 60;
        storageMeses.push({...datosMensual});
        
        console.log('datosMensual',{...datosMensual})
    }

        //Dato trimestral
        datosTrimestral.derrame = derrame;
        datosTrimestral.latasAllenar = Math.trunc(derrame/354);
        datosTrimestral.perdidaJarabeDinero = costoTotalLata;
        datosTrimestral.ventaLatas = datosTrimestral.latasAllenar * 60; 
        console.log('numSemana: ',numSemana);

        storageTrimestre.push({...datosTrimestral});
        
        console.log(storageSemanas);
        console.log(storageMeses);
        console.log(storageTrimestre);

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
            console.log("Derrame semanal",derrameSemanal);
            storageSemanas.push(derrameSemanal);
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
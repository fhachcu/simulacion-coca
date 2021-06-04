import {binomial, poisson, normal} from './distribuciones.js';   

//Vriables
let derrame = 0;
let derrameMensual = 0;
let derrameSemanal = 0;
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

export const storageMeses = [];
export const storageSemanas = [];
export const storageTrimestre = [];

//**********---------**************

//Recorremos los meses
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
        
    }

        //Dato trimestral
        datosTrimestral.derrame = derrame;
        datosTrimestral.latasAllenar = Math.trunc(derrame/354);
        datosTrimestral.perdidaJarabeDinero = costoTotalLata;
        datosTrimestral.ventaLatas = datosTrimestral.latasAllenar * 60; 

        storageTrimestre.push({...datosTrimestral});
     

}

//Recorremos los días
function recorrerDias(){
    
    let semana = 1;
    derrameMensual = 0;

    //Un mes tiene 20 días hábiles
    for(let i=0; i<20; i++){

        recorrerHoras();
        //Datos semanales
        if(semana == 5){
            numSemana++;
            semana = 1;
            storageSemanas.push(derrameSemanal/1000);
            derrameSemanal = 0;
        }
        semana ++;
    }

}

//Recorremos las horas
function recorrerHoras(){
    for(let i=0; i<8; i++){
            recorrerMinutos();
    }
}

//Recorremos los minutos
function recorrerMinutos(){
    for(let i=0; i<60; i++){
        //Obtenemos las latas
        let latas = poisson(1800);
        //Recorremos las latas
        for(let x = 0; x<latas; x++){
                //Obtenemos el derrame por lata
                let binomialAux = binomial();
                //Usamos variables auxiliares para guardar el derrame trimestral, mensual y semanal
                derrame = derrame + binomialAux;
                derrameMensual = derrameMensual + binomialAux;
                derrameSemanal = derrameSemanal + binomialAux;
        }
    }
}
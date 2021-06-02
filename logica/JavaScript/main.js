import {obtenerNumero } from "./NumerosAleatorios/congruencialAditivo.js";
import {obtenerNumero as mixto} from "./NumerosAleatorios/congruencialMixto.js";
import { uniforme, normal, binomial } from "./distribuciones.js";
import {recorrerMeses, storageMeses, storageSemanas, storageTrimestre} from './simulacion.js'


let tablaSemana = document.getElementById('semanal');
let tablaMensual = document.getElementById('mensual');
let tablaTrimestral = document.getElementById('trimestral');

document.getElementById('simular').addEventListener('click',()=>{

  console.log("Datos de un trimestre",recorrerMeses());
  console.log("Hola",storageSemanas);
  renderizar();
 
});

const renderizar = () => {

  storageSemanas.forEach((current, index) => {

    tablaSemana.innerHTML +=` <tr>
                             <th scope="row">${index}</th>
                             <td>${current.toFixed(2)}</td>
                            `
});

storageMeses.forEach((current, index) => {

  tablaMensual.innerHTML += `<tr>
                            <th scope="row">${index}</th>
                            <td>${current.derrame.toFixed(2)}</td>
                            <td>${current.perdidaJarabeDinero.toFixed(2)}</td>
                            <td>${current.latasAllenar.toFixed(0)}</td>
                            <td>${current.ventaLatas}</td>
                            </tr>
                            `
});

storageTrimestre.forEach((current, index) => {

  tablaTrimestral.innerHTML += `<tr>
                                <td>${current.derrame.toFixed(2)}</td>
                                <td>${current.perdidaJarabeDinero.toFixed(2)}</td>
                                <td>${current.latasAllenar.toFixed(2)}</td>
                                <td>${current.ventaLatas}</td>
                                </tr>
                              `
});

}



 



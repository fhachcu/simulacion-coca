import {recorrerMeses, storageMeses, storageSemanas, storageTrimestre} from './simulacion.js'


let tablaSemana = document.getElementById('semanal');
let tablaMensual = document.getElementById('mensual');
let tablaTrimestral = document.getElementById('trimestral');
let recargar = false;

recorrerMeses();

const renderizar = () => {
  
  recargar = true;
  storageSemanas.forEach((current, index) => {

    tablaSemana.innerHTML +=` <tr>
                             <th scope="row">${index+1}</th>
                             <td>${current.toFixed(2)}</td>
                            `
});

storageMeses.forEach((current, index) => {

  tablaMensual.innerHTML += `<tr>
                            <th scope="row">${index+1}</th>
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

document.getElementById('simular2').classList.remove('none-custom');  
document.getElementById('spinner').classList.add('none-custom');
document.getElementById('spinner-w-id').classList.add('none-custom');
document.getElementById('img-coca').classList.add('none-custom');
document.getElementById('tabla').classList.remove('none-custom');


}




document.getElementById('simular2').addEventListener('click',()=>{
  location.href = '/pantallas/bienvenida.html';
});


renderizar();




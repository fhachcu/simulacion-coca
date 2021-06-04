// Declaramos el array de semillas
var listaSemillas = [1942,2372,5131,3317];


//Se llama a la función para calcular el módulo que estará entre 
//1000 y 9999 
var modulo = calcModulo(); 

//Función para calcular el móudulo
function calcModulo() {
 
    let  num = Math.floor(Math.random()*(9999-1000)+1000)
    return num;
}

//Función para la obtención de números aleatorios
export function obtenerNumero(){
   
    //Se toma el último y primer número del array de semillas, luego se los suma y se le aplica el módulo
    var num = (listaSemillas[listaSemillas.length-1] + listaSemillas[listaSemillas.length-4]) % modulo;
    //El valor num que se obtiene se lo agrega al array de semillas en la última posición
    listaSemillas.push(num);

    //Se obtiene el número pseudoaleatorio a partir de dividir el num y el módulo
    var u = (num/modulo);

    return u;

}








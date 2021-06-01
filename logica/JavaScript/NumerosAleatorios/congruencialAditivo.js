var listaSemillas = [1942,2372,5131,3317];

var modulo = calcModulo(); 


function calcModulo() {
 
    let  num = Math.floor(Math.random()*(9999-1000)+1000)
    return num;
}


export function obtenerNumero(){
   
    // console.log('El modulo es',modulo);

    var num = (listaSemillas[listaSemillas.length-1] + listaSemillas[listaSemillas.length-4]) % modulo;
    listaSemillas.push(num);

    // console.log(num);

    var u = (num/modulo);

    // console.log('Número',u);
    return u;

}








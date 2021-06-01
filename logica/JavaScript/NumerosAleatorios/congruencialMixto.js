var semilla = 4;
var constMult = 5;
var constAditiva = 7;
var modulo = 8;

var sw = true;

var c = 1;
var v = semilla;
var x = 0;

export function obtenerNumero() {
    
    while (sw) {
    
        x = (parseInt(constMult*semilla)+parseInt(constAditiva))%modulo;
        semilla = x;
        console.log(semilla/modulo);
        // if(v==x){
        //     sw = false;
        // }

        sw = v==x ? (v=false) : (v=true);
    }
  
}
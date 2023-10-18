 /**
  * Variables
  */
 let state = false
 let nombreUno = ""
 let rut = ""

/**
 * Users
 */
let reservaUno = "juan soto";  
let rutUno = 1888;                
let reservaDos = "maria gomez";
let rutDos = 1777;
let reservaTres = "sofia duran";
let rutTres = 1666;
let reservaCuatro = "mario rojas";
let rutCuatro = 1555;

function bienvenida() {
    alert("Buenas noches, agradeceriamos confirmar su reservación, ¿Nos puede indicar los siguientes datos?");
}

function fraseFinal() {
    alert("Gracias por venir");
}

function pedirDatos(){
     nombreUno = prompt("Indiquenos su nombre y apellido").toLowerCase()
     rut = Number(prompt("Indiquenos su RUT"))
}

function verificarUsuario(nom,rut) {
    if (nom == reservaUno && rut == rutUno && nombreUno != "" && rut != "") {
        alert(`${nom}, Hemos podido verificar tu nombre y rut, puedes ingresar.`)   
        return true  
    }else { alert("No te encuentras registrado lo sentimos, no puedes ingresar.")   
        return false 
    }
}


    bienvenida();
do {
   pedirDatos()
   state =  verificarUsuario(nombreUno,rut)
} while (!state);

fraseFinal()




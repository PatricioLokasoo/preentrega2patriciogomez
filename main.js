/*  *
  * Variables
 
 let state = false
 let nombreUno = ""
 let rut = ""
 */

/**
 * Users
 */
/* let reservaUno = "juan soto";  
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

fraseFinal() */

// variebles fijas
let state = false;
let Usuario = "";
let rut = "";

// reemplace las variables sencillas por un array con objetos con 4 usuarios y sus atributos
// const usuarios =[
// {
// nombre: "juan",
// apellido: "soto",
// rut: 1222,
// mesa: 1,
// },

// {
// nombre: "maria",
// apellido: "vega",
// rut: 1333,
// mesa: 2,
// },

// {
// nombre: "mario",
// apellido: "veas",
// rut: 1444,
// mesa: 3,
// },

// {
// nombre: "camila",
// apellido: "rojas",
// rut: 1555,
// mesa: 4,
// },

// ];

function Usuarios(nombre, apellido, rut, mesa) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.rut = rut;
  this.mesa = mesa;
}

const usuario1 = new Usuarios("juan", "soto", 1222, 1);
const usuario2 = new Usuarios("maria", "vega", 1333, 2);
const usuario3 = new Usuarios("mario", "veas", 1444, 3);
const usuario4 = new Usuarios("camila", "rojas", 1555, 4);

const usuarios = [usuario1, usuario2, usuario3, usuario4];


function bienvenida() {
  alert(
    "Buenas noches, agradeceriamos confirmar su reservación, ¿Nos puede indicar los siguientes datos?"
  );
}
bienvenida();

function fraseFinal() {
  alert("Gracias por venir");
}

// Salida y peticion de datos al usuario para comprobar si esta registrado
function pedirDatos() {
  nombreUser = prompt("Indiquenos su nombre").toLowerCase();
  apellidoUser = prompt("Indiquenos su apellido").toLowerCase();
  rutUser = Number(prompt("Indiquenos su RUT"));
  mesaUser = Number(prompt("ingresa el numero de tu mesa"));
}

function verificarUsuario(nom, ape, rut, mes) {
  for (let i = 0; i < usuarios.length; i++) {
    if (
      nom == usuarios[i].nombre &&
      ape == usuarios[i].apellido &&
      rut == usuarios[i].rut &&
      mes == usuarios[i].mesa
    ) {
      alert(
        `${nombreUser}, Hemos podido verificar que tus datos son correctos, puedes ingresar.`
      );
      return true;
    }
  }
  alert("No te encuentras registrado, lo sentimos, no puedes ingresar.");
  return false;
}

do {
  pedirDatos();
  state = verificarUsuario(nombreUser, apellidoUser, rutUser, mesaUser);
} while (!state);

fraseFinal();

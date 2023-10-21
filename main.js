
// Variables fijas
let state = false;
let Usuario = "";
let rut = "";

function Usuarios(nombre, apellido, rut, mesa) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.rut = rut;
  this.mesa = mesa;
}

function Platos(plato, precio) {
  // Define la clase Platos
  this.plato = plato;
  this.precio = precio;
}

//USUARIOS REGISTRADOS
const usuario1 = new Usuarios("juan", "soto", 1222, 1);
const usuario2 = new Usuarios("maria", "vega", 1333, 2);
const usuario3 = new Usuarios("mario", "veas", 1444, 3);
const usuario4 = new Usuarios("camila", "rojas", 1555, 4);

const usuarios = [usuario1, usuario2, usuario3, usuario4];

function bienvenida() {
  alert(
    `Buenas noches, ${Usuario}. Agradeceríamos confirmar su reservación. ¿Puede indicarnos los siguientes datos?`
  );
}
bienvenida();

// Salida y petición de datos al usuario para comprobar si está registrado
function pedirDatos() {
  Usuario = prompt("Indíquenos su nombre").toLowerCase(); // Asigna el nombre a Usuario
  apellidoUser = prompt("Indíquenos su apellido").toLowerCase();
  rutUser = Number(prompt("Indíquenos su RUT"));
  mesaUser = Number(prompt("Ingrese el número de su mesa"));
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
        `${Usuario}, hemos podido verificar que tus datos son correctos. Puedes ingresar.`
      );
      return true;
    }
  }
  alert("No te encuentras registrado, lo sentimos, no puedes ingresar.");
  return false;
}

do {
  pedirDatos();
  state = verificarUsuario(Usuario, apellidoUser, rutUser, mesaUser);
} while (!state);

function queDeseaComer() {
   // Definir platos de comida y sus precios
  const platosComida = [
    new Platos("Sushi", 6000),
    new Platos("Asado", 13000),
    new Platos("Arroz con huevos", 4000),
    new Platos("puré con pollo", 5000),

  ];

  return platosComida;
}

function mostrarPlatos() {
  alert("Tenemos los siguientes platos disponibles:");

  const platos = queDeseaComer();

  platos.forEach((plato) => {
    alert(`${plato.plato}: $${plato.precio}`);
  });
}

mostrarPlatos();

function seleccionarPlatos() {
  const platos = queDeseaComer();
  let totalCompra = 0;
  const platosSeleccionados = [];

  do {
    const opcion = Number(
      prompt(
        "tenemos los siguientes platos\n1. Sushi: $6000\n2. Asado: $13000\n3. Arroz con huevos: $4000\n4. puré con pollo: $5000"
        )
      );
    if (opcion === 0) {
      break;
    } else if (opcion >= 1 && opcion <= platos.length) {
      const platoElegido = platos[opcion - 1];
      platosSeleccionados.push(platoElegido);
      totalCompra += platoElegido.precio;
      alert(`Has seleccionado: ${platoElegido.plato}`);
    } else {
      alert("Opción inválida. Por favor, elija un número de plato válido.");
    }
  } while (true);

  alert(`Resumen de tu pedido:`);
  platosSeleccionados.forEach((plato) => {
    alert(`${plato.plato}: $${plato.precio}`);
  });
  alert(`Total de la compra: $${totalCompra}`);
}

seleccionarPlatos();



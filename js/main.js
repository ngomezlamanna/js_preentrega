// Funcion declarada sin return en gas
function pagarGas() {
  let opcionGas = prompt("El gas sale $" + costoGas + ":\n1. Pagar\n2. Volver");
  switch (opcionGas) {
    case "1":
      if (saldo >= costoGas) {
        saldo = saldo - costoGas;
        alert("¡Gas pagado! Tu saldo actualizado es: $" + saldo);
      } else {
        alert("Saldo insuficiente para pagar el gas.");
      }
      break;
    case "2":
      break;
    default:
      alert("Opción inválida");
  }
}

// Funcion declarada con return en Luz
function pagarLuz(saldo, costoLuz) {
  let opcionLuz = prompt("La luz sale $" + costoLuz + ":\n1. Pagar\n2. Volver");

  switch (opcionLuz) {
    case "1":
      if (saldo >= costoLuz) {
        saldo = saldo - costoLuz;
        alert("¡Luz pagada! Tu saldo actualizado es: $" + saldo);
      } else {
        alert("Saldo insuficiente para pagar la luz.");
      }
      break;
    case "2":
      break;
    default:
      alert("Opción inválida");
  }

  return saldo;
}


// Binevenida
alert("Empresa NGL. Pago de luz y gas");

// Variables para almacenar los datos de registro
let nombreRegistro;
let contrasenaRegistro;

// Mostrar menú inicial
let opcion;

while (true) {
  opcion = prompt("Escribí 1 para Registrarse\nEscriba 2 para Ingresar");

  if (opcion == "1") {
    // Registro del usuario
    nombreRegistro = prompt("Ingresá su nombre de usuario");
    contrasenaRegistro = prompt("Ingresá su contraseña");

    // Confirmación de registro
    alert("Registro exitoso. Ahora podes iniciar sesión.");
  } else if (opcion == "2") {
    // Inicio de sesion
    let nombreIngreso = prompt("Ingresá su nombre de usuario");
    let contrasenaIngreso = prompt("Ingresá su contraseña");

    // Verificar si los datos coinciden con el registro
    if (nombreIngreso === nombreRegistro && contrasenaIngreso === contrasenaRegistro) {
      alert("Inicio de sesión exitoso. ¡Bienvenido, " + nombreIngreso + "!");
      break; // Salir del bucle cuando se complete el inicio de sesión exitoso
    } else {
      alert("Nombre de usuario o contraseña incorrectos.");
    }
  } else {
    alert("Opción no válida. Por favor, escribí 1 o 2.");
  }
}

let continuar = true;  // Para pasar al prompt de opciones

let saldo = 0; // Saldo inicial

let costoGas = 2000;  // Costo del gas

let costoLuz = 5000;  // Costo de la luz

while (continuar) {
  let prueba = prompt(
    "Tenés $" + saldo + "\n1 - Depositar.\n2 - Gas.\n3 - Luz.\nPresiona X para finalizar."
  );


  if (prueba != "X") {
    // condicional para cualquier tecla distinta a "X"
    switch (prueba) {
      case "1":
        // Lógica para depositar
        let deposito = parseFloat(prompt("Ingresá el monto a depositar (máximo $15,000):"));

        if (deposito > 0 && deposito <= 15000) {
          saldo = saldo + deposito;
          alert("Se depositaron $" + deposito + ". Saldo actual: $" + saldo);
        } else if (deposito > 15000) {
          alert("El monto máximo de depósito es $15,000. Intentalo nuevamente.");
        } else {
          alert("Monto inválido. Por favor, ingresá un valor numérico válido.");
        }
        break;
      case "2":
        pagarGas();
        break;
      case "3":
        saldo = pagarLuz(saldo, costoLuz);
        break;
      default:
        // Opcion no valida
        alert("Opción no válida. Seleccioná 1, 2, 3 ó X mayúscula.");
    }
  } else {
    // Si el usuario ingresa "X"
    alert("Sesion cerrada. Hasta la proxima!");
    continuar = false; // Sale del bucle while
  }
}








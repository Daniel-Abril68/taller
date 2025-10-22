// Taller interactivo de Arrays en JavaScript
// Ejecutar con: node Arrays/arrays.js

// Importamos el módulo readline para leer desde consola
const readline = require("readline");

// Creamos la interfaz para entrada/salida de datos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Creamos un array vacío para guardar las frutas
let frutas = [];

// Función para mostrar el menú
function mostrarMenu() {
  console.clear(); // Limpia la consola en cada menú
  console.log("🍎 --- MENÚ DE ARRAYS ---");
  console.log("1. Agregar una fruta");
  console.log("2. Mostrar frutas");
  console.log("3. Eliminar la última fruta");
  console.log("4. Ordenar frutas alfabéticamente");
  console.log("5. Salir");
  rl.question("👉 Elige una opción: ", manejarOpcion);
}

// Función para manejar las opciones del menú
function manejarOpcion(opcion) {
  switch (opcion) {
    case "1":
      rl.question("🍌 Escribe el nombre de la fruta: ", (nombre) => {
        frutas.push(nombre);
        console.log(`✅ ${nombre} agregada correctamente.`);
        setTimeout(mostrarMenu, 1000);
      });
      break;

    case "2":
      if (frutas.length === 0) {
        console.log("⚠️ No hay frutas registradas.");
      } else {
        console.log("🧺 Frutas actuales:", frutas.join(", "));
      }
      setTimeout(mostrarMenu, 1500);
      break;

    case "3":
      if (frutas.length > 0) {
        let eliminada = frutas.pop();
        console.log(`❌ ${eliminada} fue eliminada.`);
      } else {
        console.log("⚠️ No hay frutas para eliminar.");
      }
      setTimeout(mostrarMenu, 1500);
      break;

    case "4":
      frutas.sort();
      console.log("📚 Frutas ordenadas:", frutas.join(", "));
      setTimeout(mostrarMenu, 1500);
      break;

    case "5":
      console.log("\n👋 ¡Gracias por usar el programa de Arrays!");
      console.log("🍇 Programa finalizado correctamente.\n");
      rl.close();
      break;

    default:
      console.log("⚠️ Opción no válida. Intenta de nuevo.");
      setTimeout(mostrarMenu, 1000);
      break;
  }
}

// Iniciar el programa
console.clear();
console.log("🍇 Bienvenido al Taller Interactivo de Arrays en JavaScript\n");
mostrarMenu();

console.log("%cEtapa 1 · Nace tu mascota", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

const mascota = {
  nombre: "Pelusa",
  tipo: "gato",
  hambre: 50,      // 0 = lleno, 100 = muerto de hambre
  felicidad: 50,   // 0 = triste, 100 = feliz
  energia: 50,     // 0 = agotado, 100 = lleno de energía

  // En las próximas etapas agregarás métodos AQUÍ dentro.
};

// Muestra el nombre (punto) y el tipo (corchete)
console.log("Nombre:", mascota.nombre);        // notación punto
console.log("Tipo:", mascota["tipo"]);         // notación corchete

console.log("")
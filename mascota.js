console.log("%cEtapa 1 · Nace tu mascota", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

const mascota = {
  nombre: "Pelusa",
  tipo: "gato",
  hambre: 50,      // 0 = lleno, 100 = muerto de hambre
  felicidad: 50,   // 0 = triste, 100 = feliz
  energia: 50,     // 0 = agotado, 100 = lleno de energía

  // En las próximas etapas agregarás métodos AQUÍ dentro.
  describir() {
    return `${this.nombre} es un ${this.tipo}.`;
  },

  alimentar() {
    this.hambre = Math.max(0, this.hambre - 20);
    console.log(`${this.nombre} comió 🍖 — Hambre: ${this.hambre}`);
  },

  jugar() {
    this.felicidad = Math.min(100, this.felicidad + 20);
    this.energia = Math.max(0, this.energia - 15);
    this.hambre = Math.min(100, this.hambre + 10);
    console.log(
      `${this.nombre} jugó 🎾 — Felicidad: ${this.felicidad}, Energía: ${this.energia}, Hambre: ${this.hambre}`
    );
  },

  dormir() {
    this.energia = Math.min(100, this.energia + 30);
    console.log(`${this.nombre} durmió 😴 — Energía: ${this.energia}`);
  },

  verEstado() {
    Object.entries(this)
      .filter(([clave, valor]) => typeof valor === "number")
      .forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`);
      });
  },
};

// Muestra el nombre (punto) y el tipo (corchete)
console.log("Nombre:", mascota.nombre);        // notación punto
console.log("Tipo:", mascota["tipo"]);         // notación corchete

console.log("")

console.log("%cEtapa 2 · El método describir() y this", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// Dentro de las llaves del objeto, después de los stats:
//   describir() {
//     return `${this.nombre} ...`;
//   },


// Fuera del objeto: invoca y muestra mascota.describir()
console.log(mascota.describir());

console.log("")

console.log("%cEtapa 3 · alimentar() (cambiar el estado)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

//   alimentar() {
//     this.hambre = Math.max(0, this.hambre - 20);
//     console.log(...);   // muestra el nuevo valor
//   },


// Fuera: mascota.alimentar();  dos veces
mascota.alimentar(); // desde 50 → 30
mascota.alimentar(); // desde 30 → 10

console.log("")

console.log("%cEtapa 4 · jugar() y dormir()", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

//   jugar() {
//     this.felicidad = Math.min(100, this.felicidad + 20);
//     this.energia  = Math.max(0, this.energia - 15);
//     console.log(...);
//   },
//   dormir() {
//     this.energia = Math.min(100, this.energia + 30);
//     console.log(...);
//   },


// Fuera: mascota.jugar();  mascota.dormir();
mascota.jugar();   // felicidad: 70, energía: 35
mascota.dormir();  // energía: 65

console.log("")

console.log("%cEtapa 5 · Ver todos los stats (Object.entries)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

//   verEstado() {
//     Object.entries(this)
//       .filter(([clave, valor]) => typeof valor === "number")
//       .forEach(([clave, valor]) => console.log(...));
//   },


// Fuera: mascota.verEstado();
mascota.verEstado();

console.log("")

console.log("%cEtapa 6 · Clon VIP (spread) y destructuring", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const mascotaVIP = { ...mascota, accesorio: ..., felicidad: 100 };
// Muestra mascotaVIP.felicidad y mascota.felicidad (debe seguir distinta)
const mascotaVIP = {
  ...mascota,
  accesorio: "corona 👑",
  felicidad: 100,
};

console.log(
  `VIP felicidad: ${mascotaVIP.felicidad} | accesorio: ${mascotaVIP.accesorio}`
);
console.log(`Original felicidad: ${mascota.felicidad}`);

// const { nombre, tipo } = mascota;
const { nombre, tipo } = mascota;
// Muestra nombre y tipo
console.log(`Mi mascota: ${nombre} (${tipo})`);

console.log("")

console.log("%c🏆 Jefe Final · El menú do/while", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// let opcion;
// do {
//   console.log("\n=== " + mascota.nombre + " ===");
//   console.log("1) Alimentar 2) Jugar 3) Dormir 4) Ver estado 5) Salir");
//   opcion = prompt("Opción:");   // (o pedir, para probar)
//   if (opcion === "1") mascota.alimentar();
//   else if (...) ...
// } while (opcion !== "5");
let opcion;

do {
  console.log(`\n=== ${mascota.nombre} ===`);
  opcion = prompt(`Ingresa una opcion:
                    1) Alimentar
                    2) Jugar      
                    3) Dormir  
                    4) Ver estado   
                    5) Salir     
    `); // o pedir("Opción:")

  if (opcion === "1") {
    mascota.alimentar();
  } else if (opcion === "2") {
    mascota.jugar();
  } else if (opcion === "3") {
    mascota.dormir();
  } else if (opcion === "4") {
    mascota.verEstado();
  } else if (opcion === "5") {
    console.log(`¡Cuídate, ${mascota.nombre}! 👋`);
  } else {
    console.log("Opción inválida, intenta de nuevo.");
  }
} while (opcion !== "5");

console.log("")
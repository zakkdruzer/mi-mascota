# 🐾 Mascota Virtual en JavaScript

Pequeño ejercicio de consola en JavaScript donde se modela una mascota virtual con estado interno (hambre, felicidad, energía) y un menú interactivo para cuidarla usando métodos del propio objeto.

---

## ✨ Funcionalidades

- Definición de un objeto `mascota` con:
  - `nombre`
  - `tipo`
  - `hambre` (0–100)
  - `felicidad` (0–100)
  - `energia` (0–100)
- Métodos de la mascota:
  - `describir()` → Devuelve una frase con nombre y tipo.
  - `alimentar()` → Reduce el hambre con piso en 0.
  - `jugar()` → Sube felicidad y baja energía con límites 0–100.
  - `dormir()` → Aumenta energía con tope en 100.
  - `verEstado()` → Muestra solo los stats numéricos usando `Object.entries`.
- Clon VIP:
  - `mascotaVIP` creada con **spread** (`{ ...mascota, ... }`), agregando accesorio y felicidad al máximo.
  - Demostración de que la copia no modifica el objeto original.
- **Destructuring**:
  - Extracción de `nombre` y `tipo` de `mascota` en variables.
- Menú interactivo con `do/while`:
  - Opciones:
    1. Alimentar
    2. Jugar
    3. Dormir
    4. Ver estado
    5. Salir

---

## 🛠️ Tecnologías utilizadas

- Lenguaje: **JavaScript**
- Entorno:
  - Navegador (usando `prompt`) **o**
  - Node.js (simulando `prompt` con una función `pedir()` o librerías tipo `readline-sync`)

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone <URL-DE-TU-REPO>
   cd <nombre-de-tu-carpeta>
   ```

2. Abrir el archivo `mascota.js` en tu editor (por ejemplo VS Code).

3. Ejecutar en navegador:
   - Incluye `mascota.js` en un archivo `index.html` simple.
   - Abre `index.html` en el navegador.
   - El menú usará `prompt()` para pedir opciones.

   Ejemplo de `index.html` mínimo:

   ```html
   <!DOCTYPE html>
   <html lang="es">
     <head>
       <meta charset="UTF-8" />
       <title>Mascota virtual</title>
     </head>
     <body>
       <script src="mascota.js"></script>
     </body>
   </html>
   ```

4. Ejecutar en Node (opcional):
   - Sustituye `prompt()` por una función `pedir()` o por alguna librería de consola.
   - Ejecuta:

   ```bash
   node mascota.js
   ```

---

## 📚 Resumen de la lógica principal

### Objeto base

```js
const mascota = {
  nombre: "Pelusa",
  tipo: "gato",
  hambre: 50,
  felicidad: 50,
  energia: 50,

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
    console.log(
      `${this.nombre} jugó 🎾 — Felicidad: ${this.felicidad}, Energía: ${this.energia}`,
    );
  },

  dormir() {
    this.energia = Math.min(100, this.energia + 30);
    console.log(`${this.nombre} durmió 😴 — Energía: ${this.energia}`);
  },

  verEstado() {
    Object.entries(this)
      .filter(([_, valor]) => typeof valor === "number")
      .forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`);
      });
  },
};
```

### Clon VIP y destructuring

```js
const mascotaVIP = {
  ...mascota,
  accesorio: "corona 👑",
  felicidad: 100,
};

console.log(
  `VIP felicidad: ${mascotaVIP.felicidad} | accesorio: ${mascotaVIP.accesorio}`,
);
console.log(`Original felicidad: ${mascota.felicidad}`);

const { nombre, tipo } = mascota;
console.log(`Mi mascota: ${nombre} (${tipo})`);
```

### Menú con `do/while`

```js
let opcion;

do {
  console.log(`\n=== ${mascota.nombre} ===`);
  console.log("1) Alimentar");
  console.log("2) Jugar");
  console.log("3) Dormir");
  console.log("4) Ver estado");
  console.log("5) Salir");

  opcion = prompt("Opción:"); // o pedir("Opción:") si lo simulas

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
```

---

## ✅ Objetivos de aprendizaje

- Practicar objetos y métodos en JavaScript.
- Usar `this` dentro de métodos.
- Modificar estado interno (mutar propiedades del objeto).
- Trabajar con `Math.min` y `Math.max` para limitar valores.
- Recorrer objetos con `Object.entries`, `filter` y `forEach`.
- Utilizar **spread operator** para clonar objetos sin mutar el original.
- Aplicar **destructuring** para extraer propiedades.
- Implementar un menú interactivo con un bucle `do/while`.

## Puedes ver el resultado en:

https://zakkdruzer.github.io/mi-mascota/

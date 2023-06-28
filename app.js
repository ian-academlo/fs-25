// Importar express
const express = require("express");

const app = express();

// un cliente realiza una petición

// el servidor atiende esa petición y responde al cliente

// metodo, url ...

// url https://pokeapi.co
//           URL              ruta

app.get("/", (request, response) => {
  const a = 5;
  console.log(a + 10);
  response.send("Hola Mundo desde mi servidor de express");
});

app.get("/contacto", (request, response) => {
  response.send("Aqui estarían los contactos");
});

// se termina el código
// Debemos dejar al servidor escuchando las peticiones entrantes

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 8000");
});

# Primer servidor

Clase donde aprenderemos a crear nuestro primer proyecto de node
y el primer servidor en express.

## Paso 1

Crear una carpeta llamada primer-servidor y abrirla en visual studio

## Iniciar un proyecto en node

- `npm init`

Inicia un nuevo proyecto en node, pero pregunta por cada detalle que ira
en el packege.json

Crea un archivo llamado el package.json

### Evitar las preguntas

`npm init -y`

Responde que si (yes) a todas las preguntas

## Express

Express es un framework minimalista para node js.

Para instalarlo necesitas ejecutar el siguiente comando

`npm i express`

Se creara una carpeta de node_modules que contendrá toda la información
de la dependencia isntalada

### Ignorar node_modules

Para no subir al repositorio esta carpeta debemos crear un archivo
llamado .gitignore. Dentro de el escribiremos

`node_modules`

## Hola mundo -- Express

### 1. Importar express

common js ->
import

`const name = require('package_name');`

export

`module.exports = kadsfjhgkfjg`

OJO ---- Se puede usar ES6

en package.json agregar lo siguiente

`"type": "module"`

### 2. Crear una isntancia de express para nuestra applicación

`const app = express();`

Esto te permitirá usar todos los métodos y propiedades de express en tu aplicación.

### 3. Atender una petición GET

Vamos a usar ahora el primer método de express para atender a una petición del tipo get en nuestro servidor.

Para esto tenemos que usar nuestra instancia app y usar el método get

`app.get()`

Este método recibe dos parámetros

1. La ruta de la url que se estará atendiendo.
2. Una función de callback que se ejecutará cuando haya una coincidencia entre método y ruta

`app.get('/contacto', () => {})`

En este ejemplo,la función de callback se ejecutará cuando se haga una petición de tipo GET en la raiz '/' de nuestro servidor.

#### La función de callback

La función de callback igual recibe parámetros. Son 3 en total, pero inciaremos usando solamente 2.

1. El objeto request -> contiene toda la información de la petición
2. El objeto response -> contiene métodos e información para dar respuesta a una petición
3. La función next.

`app.get('/', (request, response) => {})`

dentro de esta función podemos realizar toda lógica que deseemos, y al final dar una respuesta al cliente

vamos a usar el metodo send del objeto response para enviar una respuesta.

```
  app.get('/', (request, response) => {
    response.send('Hola Mundo desde express')
  });
```

### 4. Servidor escuchando peticiones

De nada serviría ejecutar nuestro programa y que solo se ejecute una vez y ya no este pendiente de que exista una peticion en el servidor.

Para ello debemos dejar que nuestro servidor siempre este pendiente de las peticiones entrantes.

Esto lo hacemos con el método llamado _listen_

Para usarlo debemos hacer lo siguiente.

`app.listen()`

#### Parámetros de listen

1. el número de puerto donde estará escuchando
2. Una función de callback que se ejecutará cuando el servidor este listo y escuchando.

Supongamos que quieres escuchar en el puerto 8000 y mostrar en consola el mensaje 'servidor ecuchando en el puerto 8000'

```
app.listen(8000, () => {
  console.log('Servidor escuchando en el puerto 8000')
})
```

Al final, el código de tu servidor básico debe verse así

```
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  res.send('Hola Mundo desde express');
})

app.listen(8000, () => {
  console.log('Servidor escuchando en el puerto 8000')
})
```

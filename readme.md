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

### Importar express

common js ->
import

`const name = require('package_name');`

export

`module.exports = kadsfjhgkfjg`

OJO ---- Se puede usar ES6

en package.json agregar lo siguiente

`"type": "module"`

### Crear una isntancia de express para nuestra applicación

`const app = express();`

Servidor se mata con ctrl + c

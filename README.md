SERVER SIDE
# Tinderazo
Aplicación de citas para gente que no es superficial
## Comenzando 🚀️
Instrucciones para obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.
### Prerrequisitos 📋️
    $ npm install

To run the app:

    $ npm run dev
***
### Endpoints API 📍️

Route | HTTP Verb | Response | Description
| -- | -- | -- |-- |
/signup | POST | | Crear una cuenta
/login | POST | | Entrar a la aplicación con tu cuenta

Route | HTTP Verb | Response |Description
| -- | -- | -- |-- |
/| GET | |Ver usuarios
/matches| GET | |Ver tus matches y chatear |
/:id/like | GET | | Añadir like a usuario
/:id/dislike | DELETE | | Eliminar like/match de usuario
/:id | GET | |Ver un usuario
/:id/chat| GET | |Chatear con un usuario |
/:id/delete | DELETE | | Borrar tu cuenta
/:id/edit | PUT | |Editar tu usario


### Despliegue 📦️
<http://www.loquesea.com>

### Autores 🖊️
Héctor Villaescusa y Marta Morán

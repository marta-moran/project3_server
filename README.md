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
/api/signup | POST | | Crear una cuenta
/api/login | POST | | Entrar a la aplicación con tu cuenta

Route | HTTP Verb | Response |Description
| -- | -- | -- |-- |
/api/user/| GET | |Ver usuarios
/api/user/matches| GET | |Ver tus matches y chatear |
/api/user/:id/like | GET | | Añadir like a usuario
/api/user/:id/dislike | DELETE | | Eliminar like/match de usuario
/api/user/:id | GET | |Ver un usuario
/api/user/chat/:id| GET | |Chatear con un usuario |
/api/user/delete/:id | DELETE | | Borrar tu cuenta
/api/user/edit/:id | PUT | |Editar tu usario


### Despliegue 📦️
<http://www.loquesea.com>

### Autores 🖊️
Héctor Villaescusa y Marta Morán

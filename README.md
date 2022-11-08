
# Pinter
Pinter es una aplicación de citas para gente que mira más alla del físico de las personas. En esta aplicación no te definirán tus fotos, si no el avatar que tú mismo/a dibujes. Podrás matchear con otras personas y chatear con ellas. 
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
/api/user/like/:id | GET | | Añadir like a usuario
/api/user/dislike/:id | DELETE | | Eliminar like/match de usuario
/api/user/:id | GET | |Ver un usuario
/api/user/chat/:id| GET | |Chatear con un usuario |
/api/user/delete/:id | DELETE | | Borrar tu cuenta
/api/user/edit/:id | PUT | |Editar tu usario


### Despliegue 📦️
https://pinter-app.vercel.app/

### Autores 🖊️
Héctor Villaescusa y Marta Morán

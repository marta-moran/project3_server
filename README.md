
# Pinter
Pinter es una aplicación de citas para gente que mira más alla del físico de las personas. En esta aplicación no te definirán tus fotos, si no el avatar que tú mismo/a dibujes. Podrás matchear con otras personas y chatear con ellas.
## Funcionalidades del proyecto 🔨
- Dibujar el avatar de tu perfil
- Hacer match con otros usuarios/as
- Chatear con otros usarios/as
- Listar tus matches

## Tecnologías
### Server side
- NodeJS
- ExpressJS
- MongoDB
- WebSockets (Socket.IO)

### Client Side
- React
- JavaScript ES6
- HTML5 y CSS
- Axios
- Canvas

### Librerias utilizadas
- React-Tinder-Cards
- Canvas-draw
- Confeti

## Comenzando 🚀️
Instrucciones para obtener una copia del proyecto en funcionamiento en tu máquina local para probarlo.

### Prerrequisitos 📋️
    $ npm install

### Para hacer funcionar la app 🚀
    $ npm run dev
    
### Endpoints API 📍️

## AUTH ROUTES 

Route | HTTP Verb | Response | Description
| -- | -- | -- |-- |
/api/signup | POST | | Crear una cuenta
/api/login | POST | | Entrar a la aplicación con tu cuenta

## USER ROUTES

Route | HTTP Verb | Response |Description
| -- | -- | -- |-- |
/api/me/| GET | | Verifica que exista jwt (json web token)
/api/| GET | | Ver todas las personas que hay en la app para empezar a hacer matches
/api/user/matches| GET | |Ver tus matches y chatear |
/api/user/like/:id | GET | | Añadir like a usuario (para hacer match)
/api/user/dislike/:id | DELETE | | No dar like a un usuario (para no hacer match)
/api/user/:id | GET | |Ver un usuario en concreto
/api/user/match| PUT | |Hacer match con otro usuario
/api/user/chat/:id| GET | |Chatear con un usuario |
/api/user/messages/:id | GET | |Listar los mensajes de dos usuarios (almacenados en la BD)
/api/user/saveMessage/:id | PUT | | Guardar un mensaje de un usuario en la BD
/api/user/profile/delete  | DELETE | | Borrar tu cuenta
/api/user/profile/edit | PUT | |Editar tu usario




### Despliegue 📦️
https://pinter-app.vercel.app/

### Autores 🖊️
Héctor Villaescusa y Marta Morán

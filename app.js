require("dotenv/config");

require("./db");

const express = require("express");
const validateToken = require('./middleware/validateToken.middleware');

const app = express();
const { Server } = require("socket.io");

//TODO LO DEL CHAT
const http = require('http') // hace falta?
const server = http.createServer(app) // hace falta?

const socketio = require('socket.io')
// const io = socketio(server)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    },
});

io.on('connection', socket => {
    // socket.on('connect', (socket) => { //escucha
    // })

    socket.on('join_room', (data) => {
        socket.join(data)
        console.log(`User id: ${socket.id} joined room ${data}`)
        // socket.emit('new message', { message: 'message' })
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on('disconnect', () => { //escucha
        console.log("User disconnect", socket.id)
        // socket
    })

    //ruta en la que tu como usuario mandas un mensaje y la id del match y te guarda el mensaje. Después de eso haces un emit del mensaje

})


// io.on('connection', (socket) => {
//     socket.on("login", ({name, room}, callback) => {

//     })
//     socket.on("sendMessage", message => {

//     })
//     socket.on("disconnect", () => {

//     })
//   })




require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "project3";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const auth = require("./routes/auth.routes");
app.use("/api", auth);

const user = require("./routes/user.routes");
app.use("/api/user", validateToken, user);


require("./error-handling")(app);

module.exports = { app, server }

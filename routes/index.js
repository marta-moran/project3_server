module.exports = app => {

    const indexRoutes = require("./index.routes")
    app.use("/", indexRoutes)

    const usersRoutes = require("./users.routes")
    app.use("/users", usersRoutes)

}


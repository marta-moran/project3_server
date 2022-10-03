require("dotenv/config");

require("./db");

const express = require("express");
const validateToken = require('./middleware/validateToken.middleware');

const app = express();

require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "project3";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

const index = require("./routes/index.routes");
app.use("/api", index);

const user = require("./routes/user.routes");
app.use("/api/user", validateToken, user);

require("./error-handling")(app);

module.exports = app;

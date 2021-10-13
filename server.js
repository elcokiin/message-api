const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");

const router = require("./network/routes");
const socket = require("./socket");
const config = require("./config");

const db = require("./db");
const MONGO_URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

app.use(cors());
socket.connect(server);
router(app);
db(MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(config.publicRoute, express.static('public'));

server.listen(config.port, () => {
    console.log( `App listening on: ${config.host}:${config.port}`  );
});
const express = require("express");

const router = require("./network/routes");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);

// static files
// app.use("/app", express.static("public"));

app.listen(config.port, () => {
    console.log(`App listening on: http://localhost:${config.port}`);
});
const db = require("mongoose");

db.Promise = global.Promise;

async function connect(MONGO_URI) {
    await db.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("[db] connected successfully");
}

module.exports = connect;
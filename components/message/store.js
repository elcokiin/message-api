const db = require("mongoose");
const config = require("../../config");
const Model = require("./model");

db.Promise = global.Promise;
const MONGO_URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;
db.connect(MONGO_URI, { useNewUrlParser: true });
console.log("[db] connected successfully")

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser) {
    let filter = {};
    if(filterUser !== null) {
        filter = { user: filterUser }
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateMessage(id, newMessage) {
    const foundMessage = await Model.findById(id);
    foundMessage.message = newMessage;
    const savedMessage = await foundMessage.save();
    return savedMessage;
}

async function deleteMessage(id) {
    return Model.deleteOne({ _id: id });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateMessage,
    remove: deleteMessage,
}
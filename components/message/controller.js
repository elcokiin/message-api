const store = require("./store");
const config = require("../../config");
const { socket } = require("../../socket");

function addMessage(chat, user, message, file) {
    if(!chat || !user || !message) {
        return Promise.reject("[messageController] user, chat or message doesn't exit");
    }

    const fileUrl = file ? `${config.host}:${config.port}${config.publicRoute}/${config.filesRoute}/${file.filename}` : "";

    const fullMessage = {
        chat,
        user,
        message,
        date: new Date,
        file: fileUrl,
    }

    socket.io.emit("message", fullMessage);

    return store.add(fullMessage)
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if(!id || !message) {
            reject("[messageController] id or message doesn't exit")
        }
        const result = await store.update(id, message);
        resolve(result)
    })
}

async function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject("[messageController] id doesn't exit");
        }
        store.remove(id)
            .then(() => resolve())
            .catch(err => reject(err))
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}
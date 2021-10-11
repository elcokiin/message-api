const store = require("./store");

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            reject("[messageController] user or message doesn't exit")
        }
        const fullMessage = {
            user,
            message,
            date: new Date,
        }
        store.add(fullMessage);
        resolve(fullMessage);
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
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
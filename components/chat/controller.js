const store = require("./store");

function addChat(users) {
    if(!users || !Array.isArray(users)) {
        return Promise.reject("[chatController] Invalid user list");
    }
    return store.add({ users });
}

function getChat(userId) {
    return store.get(userId);
}

module.exports = {
    addChat,
    getChat,
}
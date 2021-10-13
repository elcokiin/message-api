const store = require("./store");

function addUser(username, name) {
    if(!username || !name) {
        return Promise.reject("[userController] Username or name doesn't exist");
    }
    return store.add({ username, name })
}

function getUser(filterUser) {
    return store.get(filterUser);
}

module.exports = {
    getUser,
    addUser,
}
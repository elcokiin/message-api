const Model = require("./model");

function addChat(users) {
    const newChat = new Model(users);
    return newChat.save();
}

function getChat(userId) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if(userId) {
            filter = {
                users: userId
            }
        }

        Model.find(filter)
            .populate("users")
            .exec((err, populated) => {
                if(err) {
                    reject(err)
                }
                resolve(populated)
            })
    })
}

module.exports = {
    add: addChat,
    get: getChat,
}
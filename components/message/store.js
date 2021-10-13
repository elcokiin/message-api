const Model = require("./model");

function addMessage(message) {
    const myMessage = new Model(message);
    return myMessage.save();
}

async function getMessage(filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterChat !== null) {
            filter = { chat: filterChat }
        }
        Model.find(filter)
            .populate("user")
            .exec((err, populated) => {
                if(err) {
                    reject(err)
                }
                resolve(populated)
            })
    })
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
const Model = require("./model");

function addUser(user) {
    const newUser = new Model(user);
    return newUser.save();
}

async function getUser(filterUser) {
    let filter = {};
    if(filterUser !== null) {
        filter = {
            username,
        }
    }
    const result = await Model.find(filter);
    return result;
}

module.exports = {
    get: getUser,
    add: addUser,
};
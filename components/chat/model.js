const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: "users"
        }
    ]
});

const model = mongoose.model("chats", chatSchema);

module.exports = model;
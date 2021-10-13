const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    name: String,
    // password, email
})

const model = mongoose.model("users", userSchema);

module.exports = model;
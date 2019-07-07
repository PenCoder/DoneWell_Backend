const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const UserSM = new Schema({
    username: { type: String, required: true, unique: true },
    agentCode: {type: String, required: true, unique: true},
    password: { type: String, required: true, },
    createdOn: { type: Date },
    updatedOn: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("users", UserSM);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtherPersonsSM = new Schema({
    name: {
        surname: {type: String},
        firstname: {type: String}
    },
    gender: {type: String, required: true},
    relationship: {type: String},
    dob: Date,
    postal: String,
    mobile: String,
    type: String
});

module.exports = mongoose.model('OtherPersons', OtherPersonsSM);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const PersonDetailsSM = new Schema({
    title: {type: String},
    name: {
        surname: {type: String, required: true },
        firstname: {type: String}
    },
    dob: {type: Date},
    gender: {type: String, required: true},
    maritalStatus: {type: String, required: true},
    identification: String,
    idnumber: String,
    nationality: {type: String, required: true},
    tin: String,
    contact: {
        mobile: {type: String, require: true},
        email: {type: String, require: true},
        postal: String,
        digitalAddress: String,
        street: String,
        suburb: String,
        town: String, 
        region: String
    }
})

module.exports = mongoose.model('PersonalDetails', PersonDetailsSM);
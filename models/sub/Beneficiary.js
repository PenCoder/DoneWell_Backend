const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeneficiarySM = new Schema({
    name: {
        surname: {type: String},
        firstname: {type: String}
    },
    gender: {type: String, required: true},
    relationship: {type: String},
    postal: String,
    mobile: String,
    type: String
});

module.exports = mongoose.model('Beneficiary', BeneficiarySM);
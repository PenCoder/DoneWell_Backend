const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PayerSM = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    identification: String,
    id_number: String,
    paypoint: {
        employer: {type: String, required: true},
        employee_number: {type: String, required: true},
        deduction_date: Date
    },
    bank_details: {
        name: String,
        bank: String,
        number: Number,
        branch: String,
        deduction_date: Date,
        premium: Number,
        frequency: String,
        adjuster: String,
        date: {type: Date, default: Date.now}
    }
});

module.exports = mongoose.model('Payer', PayerSM);
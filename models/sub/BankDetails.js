const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BankDetailsSM = new Schema({
    name: String,
    bank: String,
    number: Number,
    branch: String,
    deduction_date: Date,
    premium: Number,
    frequency: String,
    adjuster: String,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('BankDetails', BankDetailsSM);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PayPointSM = new Schema({
    employer: {type: String, required: true},
    employee_number: {type: String, required: true},
    deduction_date: Date
});

module.exports = mongoose.model('PayPoint', PayPointSM);
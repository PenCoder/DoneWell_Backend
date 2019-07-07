const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmploymentSM = new Schema({
    employer: String,
    employeeNumber: String,
    employmentDate: Date,
    monthlyEarnings: String,
    frequency: String,
    payday: String,
    jobtitle: String,
    occupation: String
});
module.exports = mongoose.model('Employment', EmploymentSM)
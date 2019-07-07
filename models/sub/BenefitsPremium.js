const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BenefitsPremiumSM = new Schema({
    lifecover: Number,
    contribution: {type: Number, required: true},
    adjuster: {type: Number, required: true},
    term: String
});
module.exports = mongoose.model('BenefitsPremium', BenefitsPremiumSM)
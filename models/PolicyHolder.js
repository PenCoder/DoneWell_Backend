const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicyHolderSM = new Schema({
    person:{
        type: Schema.Types.ObjectId, ref: 'PersonalDetails'
    },
    employment: {
        type: Schema.Types.ObjectId, ref: 'Employment'
    },
    benefitsPremium: {
        type: Schema.Types.ObjectId, ref: 'BenefitsPremium'
    },
    beneficiary: [{
        type: Schema.Types.ObjectId, ref: 'OtherPersons'
    }],
    trustee: [{
        type: Schema.Types.ObjectId, ref: 'OtherPersons'
    }],
    payer: {
        type: Schema.Types.ObjectId, ref: 'Payer'
    },
    agent: {type: String, required: true}
})

module.exports = mongoose.model('PolicyHolder', PolicyHolderSM);
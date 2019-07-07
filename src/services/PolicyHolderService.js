var PolicyHolder = require('../../models/PolicyHolder');
var PersonalDetails = require('../../models/sub/PersonalDetails');
var Employment = require('../../models/sub/Employment');
var BenefitsPremium = require('../../models/sub/BenefitsPremium');
var OtherPersons = require('../../models/sub/OtherPersons');
var Payer = require('../../models/sub/Payer');

const express = require('express');

const policyHolderRoutes = express.Router();

policyHolderRoutes.route('/').get( async function(req, res){
    await PolicyHolder.find(function(err, holder){
        if(!err){
            res.json(holder);
        }
    }).populate('-person')
});
policyHolderRoutes.route('/:id').get(function(req, res){
    var id = req.params.id;
    PolicyHolder.findById(id, function(err, holder){
        res.json(holder);
    });
});
policyHolderRoutes.route('/add').post(async function(req, res) {
    var person = req.body.person ? new PersonalDetails(req.body.person) : null;
    var employment = req.body.employment ? new Employment(req.body.employment) : null;
    var benefitsPremium = req.body.benefitsPremium ? new BenefitsPremium(req.body.benefitsPremium) : null;
    var beneficiaries = [];
    if(req.body.beneficiary != null){ 
        (req.body.beneficiary.map((bene, index) => {
            beneficiaries.push(new OtherPersons(bene))
        }));
    }
    var trustees = [];
    if(req.body.trustee){ 
        (req.body.trustee.map((trus, index) => {
            trustees.push(new OtherPersons(trus))
        })); 
    }
    var payer = req.body.payer ? new Payer(req.body.payer) : null;
    var agent = req.body.agent ? req.body.agent : null;
    
    var hld = new PolicyHolder({
        person,
        employment,
        benefitsPremium,
        beneficiary: beneficiaries,
        trustee: trustees,
        payer,
        agent
    });
    // var hld = new PolicyHolder();
    // hld.person = person;
    // hld.beneficiary = beneficiary;
    // hld.agent = agent;
    
    hld.save()
        .then(holder => {
            res.status(200).json({'holder': 'New holder registered successfully'})
        })
        .catch(err => {
            res.status(400).send('Failed to register policy.')
        })
});
policyHolderRoutes.route('/update/:id').post(function(req, res){
    PolicyHolder.findById(req.params.id, function(err, holder){
        if(!holder){
            res.status(404).send('No record to update');
        }else{
            holder.person = req.body.person;
            holder.employment = req.body.employment;
            holder.benefitsPremium = req.body.benefitsPremium;
            holder.beneficiary = req.body.beneficiary;
            holder.trustee = req.body.trustee;
            holder.payer = req.body.payer;
            holder.agent = req.body.agent;
        }
    });
});

module.exports = policyHolderRoutes
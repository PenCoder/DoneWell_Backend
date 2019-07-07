const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginLogSM = new Schema({
    user:{ type: Schema.Types.ObjectId, ref: 'users' },
    timeOfLog: { type: Date, default: Date.now },
    activity: {type: String, default: 'in'}
})

module.exports = LoginLog = mongoose.model('loginlog', LoginLogSM);
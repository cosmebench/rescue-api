import { strictEqual } from 'assert';

const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    requiredString = (required = true) => ({ type: String, required });

const user = new Schema({
    name: {
        firstname: requiredString(),
        lastname: String
    },
    fb_id: requiredString(),
    subscriptions: [{type: Array}],
    receive_time: String,
    emergency_contact: ({type: Array})
});

module.exports = mongoose.model('User', user);
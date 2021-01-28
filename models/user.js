const {Schema, model} = require('mongoose')

const user = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    activityTypes: [{name: {type: String, required: true}}],
    activity: [
        {
            name: {type: String, required: true},
            date: {type: Date, required: true},
            start: {type: Date, required: true},
            end: {type: Date, required: true},
        },
    ],
})

module.exports = model('User', user)

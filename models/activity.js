const {Schema, model} = require('mongoose')

const activity = new Schema({
    activityType: {type: String, required},
    date: {type: Date, required: true},
    start: {type: Date, required: true},
    end: {type: Date, required: true},
})

module.exports = model('Activity', user)

const {Schema, model} = require('mongoose')

const activityHistorySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    name: {type: String, required: true},
    start: {type: Date, required: true},
    end: {type: Date, required: true},
})

module.exports = model('ActivityHistory', activityHistorySchema)

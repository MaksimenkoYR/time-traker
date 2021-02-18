const {Schema, model} = require('mongoose')

const ongoingActivitySchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    name: {type: String, required: true},
    start: {type: Date, required: true},
})

module.exports = model('OngoingActivity', ongoingActivitySchema)

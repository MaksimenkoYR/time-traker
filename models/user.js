const {Schema, model} = require('mongoose')

const user = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    activityTypes: [{name: {type: String}}],
    activity: [
        {
            name: {type: String, required: true},
            date: {type: Date, required: true},
            start: {type: Date, required: true},
            end: {type: Date, required: true},
        },
    ],
})

user.methods.addActivityTypes = function ([newActivityTypes]) {
    this.activityTypes = [...this.activityTypes, {name: newActivityTypes}]
    return this.save()
}

module.exports = model('User', user)

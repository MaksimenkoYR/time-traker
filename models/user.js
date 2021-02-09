const {Schema, model} = require('mongoose')

const user = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    activityTypes: [{name: {type: String}}],
    activity: [
        {
            name: {type: String, required: true},
            start: {type: Date, required: true},
            end: {type: Date},
        },
    ],
})

user.methods.addActivityTypes = function (newActivityTypes) {
    this.activityTypes = [...this.activityTypes, {name: newActivityTypes}]
    return this.save()
}

user.methods.addActivity = function (newActivity) {
    this.activity = [...this.activity, {name: newActivity.name, start: newActivity.start}]
    return this.save()
}
user.methods.updateActivity = function (activity) {
    console.log('activity', activity)
    this.activity = this.activity.map(item => {
        if (item.id === activity.id) {
            return {
                name: activity.name || item.name,
                start: activity.start || item.start,
                end: activity.end || item.end,
            }
        } else {
            return item
        }
    })
    return this.save()
}
module.exports = model('User', user)

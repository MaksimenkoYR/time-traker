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

user.methods.updateActivityType = function (activityType) {
    this.activityTypes = this.activityTypes.map(item => {
        if (item._id === activityType.id) {
            return
        }
    })
}

user.methods.deleteActivityType = function (id) {
    this.activityTypes = this.activityTypes.filter(item => {
        console.log(item._id != id)
        return item._id != id
    })
    console.log(this.activityTypes)
    this.save()
}

user.methods.addActivity = function (newActivity) {
    this.activity = [...this.activity, {name: newActivity.name, start: newActivity.start}]
    return this.save()
}
user.methods.updateActivity = function (activity) {
    this.activity = this.activity.map(item => {
        if (item._id === activity.id) {
            return {
                ...item,
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

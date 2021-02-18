const {Schema, model} = require('mongoose')

const user = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    activityTypes: [{name: {type: String}}],
    activityHistory: {type: Schema.Types.ObjectId, ref: 'ActivityHistory'},
    ongoingActivity: {type: Schema.Types.ObjectId, ref: 'OngoingHistory'},
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

module.exports = model('User', user)

const {Router} = require('express')

router = Router()

router.get('/', async (req, res) => {
    try {
        const startedActivity = req.user.activity.filter(item => item.end == null)
        res.status(200).send({
            activityTypes: req.user.activityTypes,
            startedActivity,
        })
    } catch (e) {
        console.log(e)
    }
})

router.post('/types', async (req, res) => {
    try {
        const newActivityTypes = req.body.activityName
        req.user.addActivityTypes(newActivityTypes)
        res.status(201).send({message: 'activity type created'})
    } catch (e) {
        console.log(e)
    }
})

router.post('/start', async (req, res) => {
    try {
        const newActivity = {name: req.body.activityType, start: req.body.start}
        req.user.addActivity(newActivity)
        res.status(201).send({message: 'activity started'})
    } catch (e) {
        console.log(e)
    }
})

router.post('/:id/end', async (req, res) => {
    try {
        req.user.updateActivity(req.body)
        res.status(201).send({message: 'acntivity end'})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

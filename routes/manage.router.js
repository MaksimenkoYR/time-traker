const {Router} = require('express')
const {check, validationResultt, validationResult} = require('express-validator')
const User = require('../models/user')

const router = Router()

router.delete('/activity_types/:id', async (req, res) => {
    try {
        req.user.deleteActivityType(req.body.id)
        res.status(200).send({message: 'activity type deleted'})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router

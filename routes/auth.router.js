const {Router} = require('express')
const {check, validationResultt, validationResult} = require('express-validator')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = Router()
router.post(
    '/registration',
    [
        check('email', 'incorrect email').isEmail(),
        check('password', 'min length 6 symbols').isLength({min: 6}),
    ],
    async (req, res) => {
        try {
            console.log(req.body)

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res
                    .status(400)
                    .json({errors: errors.array(), message: 'incorect registration data'})
            }
            const {email, password} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'acount with this email already exist'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword})
            await user.save()
            res.status(201).json({message: 'user creted'})
        } catch (error) {
            res.status(500).json({error, message: 'something wrong, try againaut'})
            throw error
        }
    }
)
router.post(
    '/login',
    [
        check('email', 'incorrect email').isEmail(),
        check('password', 'min length 6 symbols').isLength({min: 6}),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({errors, message: 'incorect login  data'})
            }
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: 'account not find'})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message: 'wrong password'})
            }

            token = jwt.sign({userId: user.id}, 'jojo', {expiresIn: '1h'})
            res.status(201).json({token, userId: user.id})
        } catch (error) {
            res.status(500).json({message: 'something wrong, try againaut'})
        }
    }
)
module.exports = router

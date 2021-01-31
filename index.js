const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const PORT = '5000'
const MongoURI =
    'mongodb+srv://MaksimenkoYr:1337@time-tracker.xkvyz.mongodb.net/time-tracker?retryWrites=true&w=majority'

const app = express()
app.use(express.json({extendet: true}))

app.use(async (req, res, next) => {
    try {
        const user = await User.findById(req.headers['user-id'])
        req.user = user
    } catch (e) {
        console.log(e)
    }
    next()
})
app.use('/activity', require('./routes/activity.router'))
app.use('/api/auth', require('./routes/auth.router'))

async function start() {
    try {
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => {
            console.log(`server starterd at port: ${PORT}`)
        })
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()

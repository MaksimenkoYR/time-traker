const express = require('express')
const mongoose = require('mongoose')

const PORT = '5000'
const MongoURI =
    'mongodb+srv://MaksimenkoYr:1337@time-tracker.xkvyz.mongodb.net/time-tracker?retryWrites=true&w=majority'

const app = express()

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
        console.log(e)
    }
}

start()

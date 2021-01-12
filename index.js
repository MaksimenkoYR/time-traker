const express = require('express')
const mongoose = require('mongoose')

const PORT = '5000'
const MongoURI =
    'mongodb+srv://MaksimenkoYr:1337@time-tracker.xkvyz.mongodb.net/time-tracker?retryWrites=true&w=majority'

const app = express()

async function start() {
    try {
        await mongoose.connect(MongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => {
            console.log(`server starterd at port: ${PORT}`)
        })
    } catch (error) {
        console.log(e)
    }
}

start()

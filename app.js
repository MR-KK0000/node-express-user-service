require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT
const router = require('./routes/routes')
const { connectMongo} = require('./config/mongo.db.config')

app.use(morgan('dev'));

app.use(express.json());

app.use(cors());

const db = connectMongo()
db.on("error", console.log.bind(console, "connection error"))
db.once("open", (callback) =>{
    console.log("connection succeded")
})

app.use('/user', router)


app.listen(port,() =>{
    console.log(`listen start app port: ${port}`)
})
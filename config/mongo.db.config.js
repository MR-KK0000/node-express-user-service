const mongoose = require('mongoose')

const connectMongo = () =>{
    const url = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    return mongoose.connection
}

module.exports = {
    connectMongo
}
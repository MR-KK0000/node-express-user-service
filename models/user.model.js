const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { v4: uuidv4 } = require('uuid');

const userSchema = Schema({
    userID: { type: String, default: uuidv4() },
    username: { type : String , unique : true},
    password: String,
    active: { type: Boolean, default: true}
},
{
    timestamps: true,
    versionKey: false
})

const User = mongoose.model('users', userSchema)

module.exports = User
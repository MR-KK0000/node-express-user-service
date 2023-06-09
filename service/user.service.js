const { responseFuncError } = require('../utils/core/response.util')
const userModel = require('../models/user.model')


const existUsername = async (username) => {
    try {
        const countUser = await userModel.find({username: username}).countDocuments()
        return countUser > 0
    } catch (error) {
        return responseFuncError(error)
    }
}
const createUser = async (data) =>{
    try {
        const result = await userModel.create({...data})
        return result
    } catch (error) {
        return responseFuncError(error)
    }
}

const getAllUser = async () =>{
    try {
        const result = await userModel.find({})
        return result
    } catch (error) {
        return responseFuncError(error)
    }
}

const getUserByID = async (id) =>{
    try {
        const result = await userModel.findOne({userID: id})
        return result
    } catch (error) {
        return responseFuncError(error)
    }
}

const updateUserByID = async (id, data) =>{
    try {
        const result = await userModel.updateOne({
            userID: id
        },{
            $set:{
                ...data
            }
        })
        return result
    } catch (error) {
        return responseFuncError(error)
    }
}

module.exports = {
    createUser,
    updateUserByID,
    getUserByID,
    getAllUser,
    existUsername
}
const userService = require('../service/user.service')

const controller = {}

controller.createUser = async (req, res) =>{
    try {
        const user = await userService.createUser(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

controller.exisitUser = async (req, res) =>{
    try {
        const { username } = req.query 
        const user = await userService.existUsername(username)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

module.exports = controller
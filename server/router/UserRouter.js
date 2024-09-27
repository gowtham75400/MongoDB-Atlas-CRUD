const express = require('express')
const controller = require('../controllers/UserController.js')

const route = express.Router()

route.post('/create',controller.create)
route.post('/getall',controller.getAll)
route.post('/getOne',controller.getOne)
route.post('/update',controller.update)
route.post('/deleteUser',controller.deleteUser)

module.exports = route
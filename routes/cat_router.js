const express = require('express')
const api = express.Router()

api.use((req, res, next) => {
    res.send('welcome to the Cat page')
})

module.exports = api

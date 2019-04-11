const express = require('express')
const path = require('path')
const fs = require('fs')
const api = express.Router()

api.use((req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'))

    // res.sendFile(__dirname + './assets/Siam.jpg')
    // console.log('Sent: cat image')
})

module.exports = api

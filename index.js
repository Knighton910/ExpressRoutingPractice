const express = require('express')
const path = require('path')
const logger = require('morgan')
const apiRouter = require('./routes/api_router.js')
const catRouter = require('./routes/cat_router.js')

const app = express()

const staticPath = path.resolve(__dirname, 'static')

// 3rd middleware
app.use(logger('tiny'))

// EndPoint route
app.get('/', (req, res) => {
    res.send("Welcome to Olivia's homepage")
})

app.use('/api', apiRouter)
app.use('/cat', catRouter)

// error handler
app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.get('/users/:userid', (req, res) => {
    var userId = parseInt(req.params.userid, 10)
    //** Do something with code */
})

/** @description
 * 1st line: defines the route URLs and captures digits
 * 2nd line: accesses paramseters by their ordinality*/
app.get(/^\/users\/(\d+)$/, (req, res) => {
    let userId = parseInt(req.params[0], 10)
    //** Do something with code */
})

/** @description
 * 1st line: grabs the first captured param as a str and does conversion
 * 2nd line: grabs the second param and converts to an interger
 * (info) its possible to define a route that matches UUIDs (long str of hex digits)*/
app.get(/^\/users\/(\d+)-(\d+)$/, (req, res) => {
    let startId = parseInt(req.params[0], 10)
    let endId = parseInt(req.params[1], 10)
})

/** @description
 * UUID-matching routes with a regexp*/
let horribleRegexp = /^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i
app.get(horribleRegexp, (req, res) => {
    let uuid = req.params[0]
    //** Do something with code */
})

app.get('/search', (req, res) => {
    req.query.q == 'javascript-themed burrito'
    //** Do something with code */
})

app.listen(3000)

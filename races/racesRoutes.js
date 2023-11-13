const express = require('express')
const { figureAuthorization, getBalanceMessage } = require("../data/middleware")
const races = express.Router()
//races.use(getBalanceMessage)

races.get('/', (req, res) => {
    const races = [
        'Canine',
        'Feline',
        'Equine',
        'Ursine'
    ]
    res.status(200).json(races)
})

races.get('/pumpkin', figureAuthorization, (req, res, next) => {
    console.log('Gate opening! Throw the pumpkin at the beeg wuff!')
    console.log('Safe for now...')
    res.send("Hey you guys....")
})

races.get('/time', (req, res, next) => {
    res.status(200).send(res.locals.balance)
    res.locals.nowTime = Date.now()
    console.log('The amount of seconds of : ' + (res.locals.nowTime - res.locals.time))
})



module.exports = races
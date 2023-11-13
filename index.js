const express = require('express')
const path = require('path')
const { logger, passGate} = require('./data/middleware')
const server = express()
const port = process.env.PORT || 9000

//console.log(`args`, process.argv)

const husky = process.argv[2]
const user = process.env.USER

console.log(`Hey, you're a ${husky} right or some eskimo dog ${user}?`)

const racesRoutes = require('./races/racesRoutes')
const weaponRoutes = require('./weapons/weaponsRoutes')
server.use(express.json())
server.use(logger)
server.use(passGate)

server.use('/races', racesRoutes)
server.use('/weapons', weaponRoutes)

server.use(function (req, res, next) {
    res.status(404).send(`Ain't nobody got time for dat!`)
})
server.listen(port, () => {
    console.log(`Awesome sauce happening on ${port}!`)
})



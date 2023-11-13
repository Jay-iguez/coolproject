const express = require('express')
const { logger, passGate } = require('./data/middleware')
const racesRoutes = require('./races/racesRoutes')
const weaponRoutes = require('./weapons/weaponsRoutes')
//
const server = express()
const port = process.env.PORT || 9000

server.use(express.json())
server.use(logger)
server.use(passGate)
//
server.use('/races', racesRoutes)
server.use('/weapons', weaponRoutes)

server.use(function (req, res, next) {
    res.status(404).send(`Ain't nobody got time for dat!`)
})
server.listen(port, () => {
    console.log(`Awesome sauce happening on ${port}!`)
})



//console.log(`args`, process.argv)
//const husky = process.argv[2]
//const user = process.env.USER
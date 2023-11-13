const express = require('express')
const path = require('path')
const weapons = express.Router()

const obj = {
    errorCode : 1404
}
weapons.use(errorHandler(obj))

weapons.get('/', (req, res) => {
    const firearms = [
        'Shotgun',
        'Pistol',
        'AR',
        'Revolver'
    ]

    res.status(200).json(firearms)
})

weapons.get('/download', (req, res, next) => {
    const filePath = path.join(__dirname, 'eminemblass.png')
    res.sendFile(filePath, (err) => {
        if (err){
            next(err)
        } else {
            console.log('File sent successfully.')
        }
    })
})

function errorHandler(obj){
    return (req, res, next) => {
        if (obj.errorCode === 1404){
            next({ message: 'not found'})
        } else if (obj.errorCode === 1500) {
            res.status(500).json({
                message: "Watermelon error"
            })
        }
    }
}

weapons.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message
    })
})


/**
 * weapons.use((err, req, res, next) => {
    // error handling middlware takes in ERROR!
    console.log(err)
    res.status(500).json({
        message: 'There was an error preforming the required operation!', error: err
    })
})
 */

module.exports = weapons
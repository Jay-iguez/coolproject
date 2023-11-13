function logger(req, res, next) {
    console.log(
        `
        [${new Date().toISOString()}] ${req.method}
        to: ${req.url} from: ${req.get('Origin')}
        `
    )
    res.locals.time = Date.now()
    next()
}

function passGate(req, res, next) {
    console.log('At the gate, about to be eaten')

    next()
}

function figureAuthorization(req, res, next) {
    if (req.url === '/pumpkin') {
        next()
    } else {
        res.send('The giant black wolf is literally behind right now - should have known the password dum dum')
    }
}

function getBalanceMessage(req, res, next) {
    const time = new Date()
    if (time.getSeconds() % 2 !== 0) {
        res.status(403).send('Seconds is odd!')
    } else {
        res.locals.balance = 'Balance is the key; making things even is the secret to success.'
        next()
    }
}

module.exports = {
    logger, passGate, figureAuthorization, getBalanceMessage
}
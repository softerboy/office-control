const router = require('express').Router()

const home = require('./controller/home')

// setting up controllers and actions
router.get(['/', '/home'], home.index)


module.exports = router
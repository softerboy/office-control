const router = require('express').Router()

const home = require('./controller/home')
const data = require('./controller/data')

// setting up controllers and actions
router.get(['/', '/home'], home.index)
router.get('/chairs', data.chairs)
router.get('/tables', data.tables)
router.get('/shelves', data.shelves)
router.get('/all', data.all)
router.get('/tasks/all', data.tasks)
router.post('/tasks/create', data.createTask)


module.exports = router
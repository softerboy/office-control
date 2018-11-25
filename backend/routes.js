const router = require('express').Router()

const home = require('./controller/home')
const data = require('./controller/data')

// setting up controllers and actions
router.get(['/', '/home'], home.index)
router.get('/all', data.all)
router.get('/tasks/all', data.tasks)
router.post('/tasks/create', data.createTask)
router.post('/upload', data.upload)
router.get('/users', data.users)
router.get('/types', data.types)
router.get('/furniture/:slug', data.furniture)
router.get(['/search', '/search/:query'], data.search)
router.get(['/tasks/remove', '/tasks/remove/:taskid'], data.removeTask)

module.exports = router
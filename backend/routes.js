const upload = require('multer')({dest: 'uploads/'})
const router = require('express').Router()

const home = require('./controller/home')
const data = require('./controller/data')

// setting up controllers and actions
router.get(['/', '/home'], home.index)
router.get('/all', data.all)
router.get('/tasks/all', data.tasks)
router.post('/tasks/create', data.createTask)
router.post('/upload', upload.single('image'), data.upload)
router.get('/users', data.users)


module.exports = router
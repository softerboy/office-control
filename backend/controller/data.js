const dataProvider = require('../data/in-memory-data-provider')
const multer = require('multer')
const slugify = require('slugify')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'backend/public/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const imageUpload = multer({ storage }).single('image')

const BAD_REQUEST_CODE = 400

module.exports = {
    all: (req, res) => {
        dataProvider.getHouseHolders()
            .then(households => res.json(households))
            .catch(err => res.status(BAD_REQUEST_CODE).json(err))
    },

    tasks: (req, res) => dataProvider.getTasks()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(BAD_REQUEST_CODE).json(err)),

    createTask: (req, res) => {
        dataProvider.createTask(req.body)
            .then(task => res.json(task))
            .catch(err => res.status(BAD_REQUEST_CODE).json(err))
    },

    upload: (req, res) => {
        imageUpload(req, res, err => {
            const errors = {}
            if (!req.file)
                errors.image = "Image file can't be empty"
            if (!req.body.type)
                errors.type = "Type is required"
            if (!req.body.owner)
                errors.owner = "Owner is required"
            if (!req.body.description)
                errors.description = "Description is required"

            if (Object.keys(errors).length !== 0) {
                res.status(BAD_REQUEST_CODE).json(errors)
                return
            }

            if (err) {
                // An unknown error occurred when uploading image.
                // For example: no permission to write image to file system
                errors.uploadError = err
                res.status(BAD_REQUEST_CODE).json(errors)
                return
            }

            // Everything went fine.
            const { type, owner, description } = req.body
            const { originalname } = req.file
            const household = {
                slug: slugify(originalname, { lower: true }),
                type,
                name: 'Some item',
                image: `/static/images/${originalname}`,
                owner,
                description
            }

            dataProvider.upload(household)
                .then(data => res.json(data))
                .catch(err => res.status(400).json(err))
        })
    },

    users: (req, res) => {
        dataProvider.getUsers()
            .then(users => res.json(users))
            .catch(err => res.status(BAD_REQUEST_CODE).json(err))
    },

    types: (req, res) => {
        dataProvider.getTypes()
            .then(types => res.json(types))
            .catch(err => res.status(BAD_REQUEST_CODE).json(err))
    },

    furniture: (req, res) => {
        dataProvider.getSingleFurniture(req.params.slug)
            .then(furniture => res.json(furniture))
            .catch(err => res.status(BAD_REQUEST_CODE).json(err))
    },

    search: (req, res) => {
        dataProvider.search(req.params.query)
            .then(results => res.json(results))
            .catch(err => res.status(BAD_REQUEST_CODE).json(err))
    }
}
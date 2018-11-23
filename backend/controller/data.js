const dataProvider = require('../data/in-memory-data-provider')

module.exports = {    
    all: (req, res) => {        
        dataProvider.getHouseHolders()
            .then(households => res.json(households))
            .catch(err => res.status(404).json(err))
    },

    tasks: (req, res) => dataProvider.getTasks()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json(err)),
    
    createTask: (req, res) => {
        dataProvider.createTask(req.body)
            .then(task => res.json(task))
            .catch(err => res.status(404).json(err))
    },

    upload: (req, res) => {
        console.log(req.body)
        console.log(req.file)
        dataProvider.upload({...req.body})
    },

    users: (req, res) => {
        dataProvider.getUsers()
            .then(users => res.json(users))
            .catch(err => res.status(404).json(err))
    }
}
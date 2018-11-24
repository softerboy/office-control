const multer = require('multer')
const imageUpload = multer({ dest: 'backend/public/images' }).single('image')

const sampleData = require('./sample-data')

const households = [...sampleData.households]
const tasks = [...sampleData.tasks]
const types = [...sampleData.types]
const owners = [...sampleData.owners]

module.exports = {
    getHouseHolders: async () => households,
    getTasks: async () => tasks,
    getTypes: async () => types,
    getUsers: async () => owners,

    createTask: async task => {
        tasks.push(task)
        return task
    },

    upload: async household => {
        console.log(household)
        households[household.type].items.push(household)
        return household
    }
}
const multer = require('multer')

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
    },

    getSingleFurniture: async slug => {
        if (slug) {
            const items = [] // concatenate all items
            for (const furniture of households)
                items.push(...furniture.items)
            
            // find item by given slug
            const found = items.find(item => item.slug === slug)
            
            if (found)
                return found
            else
                throw { message: 'Element not found' }
        }
        throw new Error("Slug required")
    },

    search: async query => {
        if (query) {
            const items = [] // concatenate all items
            for (const furniture of households)
                items.push(...furniture.items)

            const results = []
            for (const item of items) {
                if (item.name.toLowerCase().match(query.toLowerCase()))
                    results.push(item)
            }

            return results
        }
        throw {message: "Query string required"}
    }
}
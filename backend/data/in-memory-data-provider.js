const sampleData = require('./sample-data')

const households = [...sampleData.households]
let tasks = [...sampleData.tasks]
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
            const result = []

            for (const furniture of households) {
                const items = {}
                items.items = furniture.items.filter(item => item.name.toLowerCase().match(query.toLowerCase()))
                if (items.items.length > 0) {                    
                    items.col = furniture.col
                    items.title = furniture.title
                    result.push(items)
                }
            }
            
            return result
        }
        return households
    },

    removeTask: async taskid => {        
        tasks = tasks.filter(task => task.id != taskid)
        return tasks
    },

    getCount: async () => {
        const countMap = []
        
        // schedule counts
        for (const furniture of households) {
            countMap.push({
                title: furniture.title,
                count: furniture.items.length
            })
        }

        return countMap
    }
}
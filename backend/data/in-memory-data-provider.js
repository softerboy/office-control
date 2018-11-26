const sampleData = require('./sample-data')

const furnitures = [...sampleData.furnitures]
let tasks = [...sampleData.tasks]
const types = [...sampleData.types]
const owners = [...sampleData.owners]

module.exports = {
    getFurnitures: async () => furnitures,
    getTasks: async () => tasks,
    getTypes: async () => types,
    getUsers: async () => owners,

    createTask: async task => {
        tasks.push(task)
        return task
    },

    upload: async furniture => {
        console.log(furniture)
        furnitures[furniture.type].items.push(furniture)
        return furnitures
    },

    getSingleFurniture: async slug => {
        if (slug) {
            const items = [] // concatenate all items
            for (const furniture of furnitures)
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

            for (const furniture of furnitures) {
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
        return furnitures
    },

    removeTask: async taskid => {        
        tasks = tasks.filter(task => task.id != taskid)
        return tasks
    },

    getCount: async () => {
        const countMap = []
        
        // schedule counts
        for (const furniture of furnitures) {
            countMap.push({
                title: furniture.title,
                count: furniture.items.length
            })
        }

        return countMap
    }
}
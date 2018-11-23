const chairs = [{
    type: 'chairs',
    name: 'Some chair',
    image: `/static/images/chair.jpg`
},{
    type: 'chairs',
    name: 'Some chair',
    image: `/static/images/chair.jpg`
},{
    type: 'chairs',
    name: 'Some chair',
    image: `/static/images/chair.jpg`
},{
    type: 'chairs',
    name: 'Some chair',
    image: `/static/images/chair.jpg`
}]

const tables = [{
    type: 'table',
    name: 'Some table',
    image: `/static/images/table.jpg`
},{
    type: 'table',
    name: 'Some table',
    image: `/static/images/table.jpg`
},{
    type: 'table',
    name: 'Some table',
    image: `/static/images/table.jpg`
}]

const shelves = [{
    type: 'shelf',
    name: 'Some shelf',
    image: `/static/images/cube-shelf.jpg`
},{
    type: 'shelf',
    name: 'Some shelf',
    image: `/static/images/valeria-accent-shelf.jpg`
},{
    type: 'shelf',
    name: 'Some shelf',
    image: `/static/images/wall-shelf.jpg`
}]


const tasks = [{
    date: Date.now(),
    title: 'Shop new cups'
}, {
    date: Date.now(),
    title: 'Prepare chairs for new employers'
}]

module.exports = {
    tables: (req, res) => res.json(tables),
    chairs: (req, res) => res.json(chairs),
    shelves: (req, res) => res.json(shelves),
    all: (req, res) => res.json([{
        col: 3,
        title: 'Chairs',
        items: [...chairs]
    }, {
        col: 4,
        title: 'Tables',
        items: [...tables]
    }, {
        col: 4,
        title: 'Shelves',
        items: [...shelves]
    }]),
    tasks: (req, res) => res.json(tasks),
    createTask: (req, res) => {
        tasks.push(req.body)
        res.json(req.body)
    }
}
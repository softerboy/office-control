const chairs = [{
    name: 'Some chair',
    image: `/static/images/chair.jpg`
},{
    name: 'Some chair',
    image: `/static/images/chair.jpg`
},{
    name: 'Some chair',
    image: `/static/images/chair.jpg`
},{
    name: 'Some chair',
    image: `/static/images/chair.jpg`
}]

const tables = [{
    name: 'Some table',
    image: `/static/images/table.jpg`
},{
    name: 'Some table',
    image: `/static/images/table.jpg`
},{
    name: 'Some table',
    image: `/static/images/table.jpg`
}]

const shelves = [{
    name: 'Some shelf',
    image: `/static/images/cube-shelf.jpg`
},{
    name: 'Some shelf',
    image: `/static/images/valeria-accent-shelf.jpg`
},{
    name: 'Some shelf',
    image: `/static/images/wall-shelf.jpg`
}]

module.exports = {
    tables: (req, res) => res.json(tables),
    chairs: (req, res) => res.json(chairs),
    shelves: (req, res) => res.json(shelves)
}
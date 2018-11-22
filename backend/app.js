// get reference to express module
const express = require('express')

const routes = require('./routes')

// create an express app
let app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static('backend/public'))

// set up api router
app.get('/', (req, res) => res.send('You are welcome'))
app.use('/api', routes)

// start app
app.listen(port, () => console.log(`App listens on port ${port}`))
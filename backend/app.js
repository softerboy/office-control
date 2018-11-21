// get reference to express module
const express = require('express')

// create an express app
const app = express()
// use port 3000 by default
const port = 3000

// set basic routing to root (i.e home) page
app.get('/', (req, res) => res.send('Hello world'))

// start app
app.listen(port, () => console.log(`App listens on port ${port}`))
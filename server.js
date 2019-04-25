const express = require('express')
const app = express()
const {port} = require('./config')
const api = require('./api')

app.use('/api', api)

app.use(express.static('public'))

app.listen(port, () => console.log(`Server is running on ${port}`))

const express = require('express')
const app = express()
const {port} = require('./config')

app.get('/api', (req, res) => res.send('Express server'))

app.use(express.static('public'))

app.listen(port, () => console.log(`Server is running on ${port}`))

const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.send('Hello World!')
})


app.use(express.static(__dirname + '/public'));

module.exports = app
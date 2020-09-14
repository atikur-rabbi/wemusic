const express = require('express')
const app = express()

var serveIndex = require('serve-index')

app.get('/api', (req, res) => {
    res.send('Hello World!')
})


app.use(express.static(__dirname + '/public'));
app.use('/music', serveIndex(__dirname + '/public/music'));

module.exports = app
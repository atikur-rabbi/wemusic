const express = require('express')
const app = express()

var serveIndex = require('serve-index')

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

 var hourMs = 1000*60*60;
//app.use(express.static(__dirname + '/public'));
app.use('/music', serveIndex(__dirname + '/public/music'));


 app.use(express.static(__dirname + '/public', { maxAge: hourMs }));


module.exports = app
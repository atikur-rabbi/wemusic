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


 app.get('/audioFile.mp3', function(req, res) {
    https.get('https://wish2.soundsip.com/box/para/files/Audio%20Stories/Bengali%20Audio%20Stories/Sunday%20Suspense/Roon-er%20Montro%20-%20MR%20James%20SS%2064ks.mp3', function(audioFile) {
      res.set(_.extend(_.pick(audioFile.headers, 'accept-ranges', 'content-type', 'content-length'), { 'Access-Control-Allow-Origin': '*' }));
      audioFile.pipe(res);
    }).on('error', function(err) {
      console.error(err);
    }).end();
  });

module.exports = app
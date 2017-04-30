const express = require('express');
const http = require('http');
const api = require('marvel-api');
const config = require('./marvel-key');

let app = express();
const server = http.createServer(app);

/* Serve static files */
app.use('/static', express.static('dist/static'));
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/dist/index.html');
});

const marvel = api.createClient(config);

/* Fetch 20 marvel characters starting at 100 */
app.get('/characters', (req, res) => {
  marvel.characters.findAll(20, 100)
    .then(characters => res.send(characters.data))
    .catch(error => res.send(error));
});

server.listen(1337, () => console.log('Magic happens on port 1337'));

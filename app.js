const express = require('express');
const http = require('http');
const api = require('marvel-api');
const config = require('./marvel-key');

let app = express();
const server = http.createServer(app);

app.use('/static', express.static('dist/static'));
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/dist/index.html');
});

const marvel = api.createClient(config);

app.get('/characters', (req, res) => {
  marvel.characters.findAll(20, 100)
    .then(characters => res.send(characters.data))
    .catch(error => res.send(error));
});

app.get('/characters/:id', (req, res) => {
  marvel.characters.find(req.id)
    .then(character => res.send(character.data[0]))
    .catch(error => res.send(error));
});

app.param('id', (req, res, next, id) => {
    req.id = id;
    next();
});

server.listen(1337, () => console.log('Magic happens on port 1337'));

const express = require('express');
const http = require('http');
const api = require('marvel-api');
const config = require('./marvel-key');
const redis = require('redis');

let app = express();
const server = http.createServer(app);

/* Serve static files */
app.use('/static', express.static('dist/static'));
app.get('/', (req, res) => {
  res.sendFile( __dirname + '/dist/index.html');
});

const client = redis.createClient(process.env.REDIS_PORT);

const marvel = api.createClient(config);

function cache (req, res, next) {
  client.get('characters', (err, data) => {
    if (err) console.log(err);
    if (data != null) {
      console.log('got from cache');
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}

/* Fetch 20 marvel characters starting at 100 */
app.get('/characters', cache, (req, res) => {
  console.log('Fetching characters')
  marvel.characters.findAll(20, 100)
    .then(characters => {
      client.setex('characters', 86400, JSON.stringify(characters.data));
      res.send(characters.data);
    })
    .catch(error => {
      res.status(500).send('error');
    });
});

server.listen(1337, () => console.log('Magic happens on port 1337'));

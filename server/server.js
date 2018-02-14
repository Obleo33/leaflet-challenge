const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/locations', (request, response) => {
  database('locations').select()
  .then(locations => response.status(200).send(locations))
  .catch(error => response.status(500).send(error)) 
})

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/api/v1/locations', (request, response) => {
  const location = request.body
  database('locations').insert(location, ['id', 'name', 'lat', 'lng'])
    .then(location => response.status(201).json(location[0]))
    .catch(error => response.sendStatus(422, error))
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
  console.log('RrrarrrrRrrrr server alive on port 3001');
});

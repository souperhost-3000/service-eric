/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Image = require('../database/image.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/images/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  Image.findOne({ listing_id: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500);
      throw err;
    });
});

module.exports = app;

const express = require('express');
const converter = require('./converter');

const app = express();

app.listen(5000);

app.get('/rgbToHex', (req, res) => {
  const red = parseInt(req.query.red);
  const green = parseInt(req.query.green);
  const blue = parseInt(req.query.blue);
  const hex = converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get('/hexToRgb', (req, res) => {
  const hex = req.query.hex;
  const rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
})
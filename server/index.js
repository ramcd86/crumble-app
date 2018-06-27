const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const root = './';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(root, 'dist')));
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./../dist/index.html'));
});

const port = process.env.Port || 3000;
app.listen(port, () => {
  console.log(`API running on localhost:${port}`);
});

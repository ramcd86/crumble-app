const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');
const routes = require('./routes/routes');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

require('./models/userRegisterModel');
require('./passport-engine/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'User Persistent',
  resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '../src')));
app.use(passport.initialize());
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  // res.sendFile(path.join(__dirname, 'src/index.html'));
});
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

const port = process.env.PORT || 4200;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));

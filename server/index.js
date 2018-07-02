const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');
const routes = require('./routes');
const root = './';
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

require('./user');
require('./passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(require('express-session')({
//   secret: 'User Persistent',
//   resave: false,
//     saveUninitialized: false
// }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(passport.initialize());
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});
// const account = require('./userloginModel');
// passport.use(new LocalStrategy(account.authenticate()));
// passport.serializeUser(account.serializeUser());
// passport.deserializeUser(account.deserializeUser());


const port = process.env.PORT || 4200;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

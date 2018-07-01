const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const root = './';
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'User Persistent',
  resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(root, 'dist')));
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./../dist/index.html'));
});
const account = require('./userloginModel');
passport.use(new LocalStrategy(account.authenticate()));
passport.serializeUser(account.serializeUser());
passport.deserializeUser(account.deserializeUser());


const port = process.env.Port || 3000;
app.listen(port, () => {
  console.log(`API running on localhost:${port}`);
});

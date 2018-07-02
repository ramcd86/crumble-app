const express = require('express');
const router = express.Router();
const userLoginService = require('../server/userloginService');
const userLoginModel = require('../server/userloginModel');
const userDetailsService = require('../server/userdetailsService');
const userDietData = require('../server/userdietdataService');
const dbState = require('../server/dbstateService');
const passport = require('passport');

const User = require('../server/user');

const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const ctrlProfile = require('./profile');
const ctrlAuth = require('./authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

router.post('/userLogin', function (req, res) {
  userLoginModel.register(new userLoginModel(
    {
      username: req.body.username, //EMAIL
      listId: req.body.listId,
      dataId: req.body.dataId,
      password: req.body.password
    }
  ), req.body.password, function (err, account) {
    if (err) {
      // return res.render('register', {account: account});
      console.log(err);
    }

    //
    passport.authenticate('local')(req, res, function () {
      res.status(201).json(userLoginModel);
      console.log('User successfully created.');
    });
  });
});
//
// router.get('/userLogin', function(req, res) {
//   res.render('login', { user : req.user });
//   // res.status(200).json();
// });

// router.post('/userSignin', passport.authenticate('local'), function(req, res) {
//   res.status(200).json(req);
// });
router.post('/signup', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});
router.post('/userSignin', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = '123456789';
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});



/// GET REQUESTS
router.get('/dbState', (req, res) => {
  dbState.getDbState(req, res);
});
router.get('/userLogin', (req, res) => {
  userLoginService.getUserLogin(req, res);
});
router.get('/userDetails', (req, res) => {
  userDetailsService.getUserDetails(req, res);
});
router.get('/userDietData', (req, res) => {
  userDietData.getUserDietData(req, res);
});

// GET REQUESTS, SPECIFIC
router.get('/dbState/:listId', (req, res) => {
  dbState.getExistingDbState(req, res);
});
// router.get('/userLogin/:email/:password', (req, res) => {
//   userLoginService.getExistingUserLogin(req, res);
// });
router.get('/userDetails/:listId', (req, res) => {
  userDetailsService.getExistingUserDetails(req, res);
});
router.get('/userDietData/:listId', (req, res) => {
  userDietData.getExistingUserDietData(req, res);
});

// POST REQUESTS
router.post('/dbState', (req, res) => {
  dbState.postDbState(req, res);
});
// router.post('/userLogin', (req, res) => {
//   userLoginService.postUserLogin(req, res);
// });
router.post('/userDetails', (req, res) => {
  userDetailsService.postUserDetails(req, res);
});
router.post('/userDietData', (req, res) => {
  userDietData.postUserDietData(req, res);
});

// PUT REQUESTS
router.put('/dbState/:listId', (req, res) => {
  dbState.putDbState(req, res);
});
router.put('/userLogin/:listId', (req, res) => {
  userLoginService.putUserLogin(req, res);
});
router.put('/userDetails/:listId', (req, res) => {
  userDetailsService.putUserDetails(req, res);
});
router.put('/userDietData/:listId', (req, res) => {
  userDietData.putUserDietData(req, res);
});

// DELETE REQUESTS
router.delete('/dbState/:listId', (req, res) => {
  dbState.deleteDbState(req, res);
});
router.delete('/userLogin/:listId', (req, res) => {
  userLoginService.deleteUser(req, res);
});
router.delete('/userDetails/:listId', (req, res) => {
  userDetailsService.deleteUserDetails(req, res);
});
router.delete('/userDietData/:listId', (req, res) => {
  userDietData.deleteUserDietData(req, res);
});

module.exports = router;

const express = require('express');
const router = express.Router();
// const userLoginService = require('../services/userLoginService');
const userDetailsService = require('../services/userDetailsService');
const userDietDataService = require('../services/userDietDataService');
const dbState = require('../services/dbStateService');
const passport = require('passport');
const User = require('../models/userRegisterModel');
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
const ctrlProfile = require('../passport-engine/profile');
const ctrlAuth = require('../passport-engine/authentication');

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
  userDietDataService.getUserDietData(req, res);
});

// GET REQUESTS, SPECIFIC
router.get('/dbState/:listId', (req, res) => {
  dbState.getExistingDbState(req, res);
});
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/userDetails/:listId', (req, res) => {
  userDetailsService.getExistingUserDetails(req, res);
});
router.get('/userDietData/:listId', (req, res) => {
  userDietDataService.getExistingUserDietData(req, res);
});

// POST REQUESTS
router.post('/dbState', (req, res) => {
  dbState.postDbState(req, res);
});
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/userDetails', (req, res) => {
  userDetailsService.postUserDetails(req, res);
});
router.post('/userDietData', (req, res) => {
  userDietDataService.postUserDietData(req, res);
});

// PUT REQUESTS
router.put('/dbState/:listId', (req, res) => {
  dbState.putDbState(req, res);
});
// router.put('/userLogin/:listId', (req, res) => {
//   userLoginService.putUserLogin(req, res);
// });
router.put('/userDetails/:listId', (req, res) => {
  userDetailsService.putUserDetails(req, res);
});
router.put('/userDietData/:listId', (req, res) => {
  userDietDataService.putUserDietData(req, res);
});

// DELETE REQUESTS
router.delete('/dbState/:listId', (req, res) => {
  dbState.deleteDbState(req, res);
});
// router.delete('/userLogin/:listId', (req, res) => {
//   userLoginService.deleteUser(req, res);
// });
router.delete('/userDetails/:listId', (req, res) => {
  userDetailsService.deleteUserDetails(req, res);
});
router.delete('/userDietData/:listId', (req, res) => {
  userDietDataService.deleteUserDietData(req, res);
});

module.exports = router;

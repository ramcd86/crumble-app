const express = require('express');
const router = express.Router();
const userLoginService = require('../server/userloginService');
const userDetailsService = require('../server/userdetailsService');
const userDietData = require('../server/userdietdataService');


/// GET REQUESTS
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
router.get('/userLogin/:email/:password', (req, res) => {
  userLoginService.getExistingUserLogin(req, res);
});
router.get('/userDetails/:listId', (req, res) => {
  userDetailsService.getExistingUserDetails(req, res);
});
router.get('/userDietData/:listId', (req, res) => {
  userDietData.getExistingUserDietData(req, res);
});

// POST REQUESTS
router.post('/userLogin', (req, res) => {
  userLoginService.postUserLogin(req, res);
});
router.post('/userDetails', (req, res) => {
  userDetailsService.postUserDetails(req, res);
});
router.post('/userDietData', (req, res) => {
  userDietData.postUserDietData(req, res);
});

// PUT REQUESTS
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

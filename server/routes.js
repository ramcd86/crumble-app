const express = require('express');
const router = express.Router();
const userLoginService = require('../server/userloginService');

router.get('/userLogin', (req, res) => {
  userLoginService.getUserLogin(req, res);
});

router.get('/userLogin/:email/:password', (req, res) => {
  userLoginService.getExistingUserLogin(req, res);
});

router.post('/userLogin', (req, res) => {
  userLoginService.postUserLogin(req, res);
});

router.put('/userLogin/:listId', (req, res) => {
  userLoginService.putUserLogin(req, res);
});

router.delete('/userLogin/:listId', (req, res) => {
  userLoginService.deleteUser(req, res);
});

module.exports = router;

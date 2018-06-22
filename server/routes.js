const express = require('express');
const router = express.Router();
const userLoginService = require('../server/userloginService');

router.get('/userLogin', (req, res) => {
  userLoginService.getUserLogin(req, res);
});

router.post('/userLogin', (req, res) => {
  userLoginService.postUserLogin(req, res);
  });

module.exports = router;

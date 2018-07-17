const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('UserRegistration');
module.exports.register = function(req, res) {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.registerListId = req.body.registerListId;
  user.setPassword(req.body.password);
  user.save(function(err) {
    let token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
};
module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info){
    let token;
    if (err) {
      res.status(404).json(err);
      return;
    }
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);

};

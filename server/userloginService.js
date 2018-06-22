const UserLoginModel = require('../server/userloginModel');

require('./mongo').connect();

function getUserLogin(req, res) {
  const docquery = UserLoginModel.find({});
  docquery.exec()
    .then(userlogins => {
      res.status(200).json(userlogins);
    }).catch(error => {
      res.status(500).send(error);
      return;
  })
}

function postUserLogin(req, res) {
  const originalUserLogin = {
    id: req.body.id,
    email: req.body.name,
    password: req.body.password,
    dataId: req.body.dataId
  };
    const newLogin = new UserLoginModel(originalUserLogin);
  newLogin.save(error => {
    if (checkServerError(res, error)) {
      return; }
      res.status(201).json(newLogin);
    console.log('User successfully created.');
  })
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  getUserLogin,
  postUserLogin
};

// const UserLoginModel = require('../models/userLoginModel');
// const ReadPreference = require('mongodb').ReadPreference;
// require('../env/mongo').connect();
// function getUserLogin(req, res) {
//   const docquery = UserLoginModel.find({}).read(ReadPreference.NEAREST);
//   docquery
//     .exec()
//     .then(userlogins => {
//       res.status(200).json(userlogins);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//       return;
//     })
// }
// function getExistingUserLogin(req, res) {
//   const originalUserLogin = {
//     listId: req.params.listId,
//     username: req.params.username,
//     password: req.params.password,
//     dataId: req.params.dataId
//   };
//   const searchedObject = UserLoginModel.findOne({
//     username: originalUserLogin.username,
//     password: originalUserLogin.password
//   });
//   searchedObject
//     .exec()
//     .then(user => {
//       res.status(200).json(user)
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
// }
// function putUserLogin(req, res) {
//   const originalUserLogin = {
//     listId: req.params.listId,
//     email: req.body.email,
//     password: req.body.password,
//     dataId: req.body.dataId
//   };
//   UserLoginModel.findOne({listId: originalUserLogin.listId}, (error, user) => {
//     if (checkServerError(res, error)) return;
//     if (!checkFound(res, user)) return;
//     user.email = originalUserLogin.email;
//     user.password = originalUserLogin.password;
//     user.save(error => {
//       if (checkServerError(res, error)) return;
//       res.status(200).json(UserLoginModel);
//       console.log('User updated successfully!');
//     });
//   });
// }
// function deleteUser(req, res) {
//   const id = req.params.listId;
//   UserLoginModel.findOneAndRemove({listId: id})
//     .then(user => {
//       if (!checkFound(res, user)) return;
//       res.status(200).json(user);
//       console.log('User deleted successfully!');
//     })
//     .catch(error => {
//       if (checkServerError(res, error)) return;
//     });
// }
// function postUserLogin(req, res) {
//   const originalUserLogin = {
//     listId: req.body.listId,
//     email: req.body.email,
//     password: req.body.password,
//     dataId: req.body.dataId
//   };
//   const newLogin = new UserLoginModel(originalUserLogin);
//   newLogin.save(error => {
//     if (checkServerError(res, error)) {
//       return;
//     }
//     res.status(201).json(newLogin);
//     console.log('User successfully created.');
//   })
// }
// function checkFound(res, hero) {
//   if (!hero) {
//     res.status(404).send('Not found.');
//     return;
//   }
//   return hero;
// }
// function checkServerError(res, error) {
//   if (error) {
//     res.status(500).send(error);
//     return error;
//   }
// }
// module.exports = {
//   getUserLogin,
//   postUserLogin,
//   putUserLogin,
//   deleteUser,
//   getExistingUserLogin
// };

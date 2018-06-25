const UserDetailsModel = require('../server/userdetailsModel');
const ReadPreference = require('mongodb').ReadPreference;
require('./mongo').connect();

//// GET ALL USER DETAILS
function getUserDetails(req, res) {
  const docquery = UserDetailsModel.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(userdetails => {
      res.status(200).json(userdetails);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    })
}

//// GET EXISTING USER
function getExistingUserDetails(req, res) {
  const originalUserDetails = {
    listId: req.params.listId
  };
  const searchedObject = UserDetailsModel.findOne({
    listId: originalUserDetails.listId
  });
  searchedObject
    .exec()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).send(error);
    })
}

//// MODIFY EXISTING
function putUserDetails(req, res) {
  const originalUserDetails = {
    listId: req.params.listId,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    startingWeight: req.body.startingWeight,
    currentWeight: req.body.currentWeight,
    height: req.body.height,
    age: req.body.age
  };
  UserDetailsModel.findOne({listId: originalUserDetails.listId}, (error, details) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, details)) return;
    details.email = originalUserDetails.email;
    details.firstName = originalUserDetails.firstName;
    details.lastName = originalUserDetails.lastName;
    details.userName = originalUserDetails.userName;
    details.startingWeight = originalUserDetails.startingWeight;
    details.currentWeight = originalUserDetails.currentWeight;
    details.height = originalUserDetails.height;
    details.age = originalUserDetails.age;
    details.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(UserDetailsModel);
      console.log('User updated successfully!');
    });
  });
}

//// DELETE EXISTING
function deleteUserDetails(req, res) {
  const id = req.params.listId;
  UserDetailsModel.findOneAndRemove({listId: id})
    .then(user => {
      if (!checkFound(res, user)) return;
      res.status(200).json(user);
      console.log('User deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

//// POST NEW USER LOGIN
function postUserDetails(req, res) {
  const originalUserDetails = {
    listId: req.body.listId,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    startingWeight: req.body.startingWeight,
    currentWeight: req.body.currentWeight,
    height: req.body.height,
    age: req.body.age
  };
  const newDetails = new UserDetailsModel(originalUserDetails);
  newDetails.save(error => {
    if (checkServerError(res, error)) {
      return;
    }
    res.status(201).json(newDetails);
    console.log('User successfully created.');
  })
}

function checkFound(res, hero) {
  if (!hero) {
    res.status(404).send('Not found.');
    return;
  }
  return hero;
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  getUserDetails,
  postUserDetails,
  putUserDetails,
  deleteUserDetails,
  getExistingUserDetails
};

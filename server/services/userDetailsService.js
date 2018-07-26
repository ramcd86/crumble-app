const UserDetailsModel = require('../models/userdetailsModel');
const ReadPreference = require('mongodb').ReadPreference;
require('../env/mongo').connect();
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
function getExistingUserDetails(req, res) {
  const originalUserDetails = {
    userDetailsListId: req.params.userDetailsListId
  };
  const searchedObject = UserDetailsModel.findOne({
    userDetailsListId: originalUserDetails.userDetailsListId
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
function putUserDetails(req, res) {
  const originalUserDetails = {
    userDetailsListId: req.params.userDetailsListId,
    email: req.body.email,
    userName: req.body.userName,
    startingWeight: req.body.startingWeight,
    currentWeight: req.body.currentWeight,
    weightHistory: req.body.weightHistory,
    height: req.body.height,
    age: req.body.age,
    today: req.body.today,
    blogToday: req.body.blogToday,
    blog: req.body.blog
  };
  UserDetailsModel.findOne({userDetailsListId: originalUserDetails.userDetailsListId}, (error, details) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, details)) return;
    details.email = originalUserDetails.email;
    details.userName = originalUserDetails.userName;
    details.startingWeight = originalUserDetails.startingWeight;
    details.currentWeight = originalUserDetails.currentWeight;
    details.weightHistory = originalUserDetails.weightHistory;
    details.height = originalUserDetails.height;
    details.age = originalUserDetails.age;
    details.today = originalUserDetails.today;
    details.blogToday = originalUserDetails.blogToday;
    details.blog = originalUserDetails.blog;
    details.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(UserDetailsModel);
      console.log('Details updated successfully!');
    });
  });
}
function deleteUserDetails(req, res) {
  const id = req.params.userDetailsListId;
  UserDetailsModel.findOneAndRemove({userDetailsListId: id})
    .then(user => {
      if (!checkFound(res, user)) return;
      res.status(200).json(user);
      console.log('Details deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}
function postUserDetails(req, res) {
  const originalUserDetails = {
    userDetailsListId: req.body.userDetailsListId,
    email: req.body.email,
    userName: req.body.userName,
    startingWeight: req.body.startingWeight,
    currentWeight: req.body.currentWeight,
    weightHistory: req.body.weightHistory,
    height: req.body.height,
    age: req.body.age,
    today: req.body.today,
    blogToday: req.body.blogToday,
    blog: req.body.blog
  };
  const newDetails = new UserDetailsModel(originalUserDetails);
  newDetails.save(error => {
    if (checkServerError(res, error)) {
      return;
    }
    res.status(201).json(newDetails);
    console.log('Details successfully created.');
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

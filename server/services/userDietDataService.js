const UserDietDataModel = require('../models/userDietDataModel');
const ReadPreference = require('mongodb').ReadPreference;
require('../env/mongo').connect();
function getUserDietData(req, res) {
  const docquery = UserDietDataModel.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(userDietData => {
      res.status(200).json(userDietData);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    })
}
function getExistingUserDietData(req, res) {
  const originalUserDietData = {
    userDietDataListId: req.params.userDietDataListId
  };
  const searchedObject = UserDietDataModel.findOne({
    userDietDataListId: originalUserDietData.userDietDataListId
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
function putUserDietData(req, res) {
  const originalUserDietData = {
    userDietDataListId: req.params.userDietDataListId,
    today: req.body.today,
    bigCrumbCustom: req.body.bigCrumbCustom,
    bigCrumbCustomType: req.body.bigCrumbCustomType,
    bigCrumbCustomMaxValue: req.body.bigCrumbCustomMaxValue,
    bigCrumbUserSetValue: req.body.bigCrumbUserSetValue,
    bigCrumbHistory: req.body.bigCrumbHistory,
    littleCrumb1Custom: req.body.littleCrumb1Custom,
    littleCrumb1CustomType: req.body.littleCrumb1CustomType,
    littleCrumb1CustomMaxValue: req.body.littleCrumb1CustomMaxValue,
    littleCrumb1UserSetValue: req.body.littleCrumb1UserSetValue,
    littleCrumb1History: req.body.littleCrumb1History,
    littleCrumb2Custom: req.body.littleCrumb2Custom,
    littleCrumb2CustomType: req.body.littleCrumb2CustomType,
    littleCrumb2CustomMaxValue: req.body.littleCrumb2CustomMaxValue,
    littleCrumb2UserSetValue: req.body.littleCrumb2UserSetValue,
    littleCrumb2History: req.body.littleCrumb2History,
    littleCrumb3Custom: req.body.littleCrumb3Custom,
    littleCrumb3CustomType: req.body.littleCrumb3CustomType,
    littleCrumb3CustomMaxValue: req.body.littleCrumb3CustomMaxValue,
    littleCrumb3UserSetValue: req.body.littleCrumb3UserSetValue,
    littleCrumb3History: req.body.littleCrumb3History,
    littleCrumb4Custom: req.body.littleCrumb4Custom,
    littleCrumb4CustomType: req.body.littleCrumb4CustomType,
    littleCrumb4CustomMaxValue: req.body.littleCrumb4CustomMaxValue,
    littleCrumb4UserSetValue: req.body.littleCrumb4UserSetValue,
    littleCrumb4History: req.body.littleCrumb4History,
    littleCrumb5Custom: req.body.littleCrumb5Custom,
    littleCrumb5CustomType: req.body.littleCrumb5CustomType,
    littleCrumb5CustomMaxValue: req.body.littleCrumb5CustomMaxValue,
    littleCrumb5UserSetValue: req.body.littleCrumb5UserSetValue,
    littleCrumb5History: req.body.littleCrumb5History
  };
  UserDietDataModel.findOne({userDietDataListId: originalUserDietData.userDietDataListId}, (error, DietData) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, DietData)) return;
    DietData.today = originalUserDietData.today;
    DietData.bigCrumbCustom = originalUserDietData.bigCrumbCustom;
    DietData.bigCrumbCustomType = originalUserDietData.bigCrumbCustomType;
    DietData.bigCrumbCustomMaxValue = originalUserDietData.bigCrumbCustomMaxValue;
    DietData.bigCrumbUserSetValue = originalUserDietData.bigCrumbUserSetValue;
    DietData.bigCrumbHistory = originalUserDietData.bigCrumbHistory;
    DietData.littleCrumb1Custom = originalUserDietData.littleCrumb1Custom;
    DietData.littleCrumb1CustomType = originalUserDietData.littleCrumb1CustomType;
    DietData.littleCrumb1CustomMaxValue = originalUserDietData.littleCrumb1CustomMaxValue;
    DietData.littleCrumb1UserSetValue = originalUserDietData.littleCrumb1UserSetValue;
    DietData.littleCrumb1History = originalUserDietData.littleCrumb1History;
    DietData.littleCrumb2Custom = originalUserDietData.littleCrumb2Custom;
    DietData.littleCrumb2CustomType = originalUserDietData.littleCrumb2CustomType;
    DietData.littleCrumb2CustomMaxValue = originalUserDietData.littleCrumb2CustomMaxValue;
    DietData.littleCrumb2UserSetValue = originalUserDietData.littleCrumb2UserSetValue;
    DietData.littleCrumb2History = originalUserDietData.littleCrumb2History;
    DietData.littleCrumb3Custom = originalUserDietData.littleCrumb3Custom;
    DietData.littleCrumb3CustomType = originalUserDietData.littleCrumb3CustomType;
    DietData.littleCrumb3CustomMaxValue = originalUserDietData.littleCrumb3CustomMaxValue;
    DietData.littleCrumb3UserSetValue = originalUserDietData.littleCrumb3UserSetValue;
    DietData.littleCrumb3History = originalUserDietData.littleCrumb3History;
    DietData.littleCrumb4Custom = originalUserDietData.littleCrumb4Custom;
    DietData.littleCrumb4CustomType = originalUserDietData.littleCrumb4CustomType;
    DietData.littleCrumb4CustomMaxValue = originalUserDietData.littleCrumb4CustomMaxValue;
    DietData.littleCrumb4UserSetValue = originalUserDietData.littleCrumb4UserSetValue;
    DietData.littleCrumb4History = originalUserDietData.littleCrumb4History;
    DietData.littleCrumb5Custom = originalUserDietData.littleCrumb5Custom;
    DietData.littleCrumb5CustomType = originalUserDietData.littleCrumb5CustomType;
    DietData.littleCrumb5CustomMaxValue = originalUserDietData.littleCrumb5CustomMaxValue;
    DietData.littleCrumb5UserSetValue = originalUserDietData.littleCrumb5UserSetValue;
    DietData.littleCrumb5History = originalUserDietData.littleCrumb5History;
    DietData.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(UserDietDataModel);
      console.log('DietData updated successfully!');
    });
  });
}
function deleteUserDietData(req, res) {
  const id = req.params.userDietDataListId;
  UserDietDataModel.findOneAndRemove({userDietDataListId: id})
    .then(user => {
      if (!checkFound(res, user)) return;
      res.status(200).json(user);
      console.log('DietData deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}
function postUserDietData(req, res) {
  const originalUserDietData = {
    userDietDataListId: req.body.userDietDataListId,
    today: req.body.today,
    bigCrumbCustom: req.body.bigCrumbCustom,
    bigCrumbCustomType: req.body.bigCrumbCustomType,
    bigCrumbCustomMaxValue: req.body.bigCrumbCustomMaxValue,
    bigCrumbUserSetValue: req.body.bigCrumbUserSetValue,
    bigCrumbHistory: req.body.bigCrumbHistory,
    littleCrumb1Custom: req.body.littleCrumb1Custom,
    littleCrumb1CustomType: req.body.littleCrumb1CustomType,
    littleCrumb1CustomMaxValue: req.body.littleCrumb1CustomMaxValue,
    littleCrumb1UserSetValue: req.body.littleCrumb1UserSetValue,
    littleCrumb1History: req.body.littleCrumb1History,
    littleCrumb2Custom: req.body.littleCrumb2Custom,
    littleCrumb2CustomType: req.body.littleCrumb2CustomType,
    littleCrumb2CustomMaxValue: req.body.littleCrumb2CustomMaxValue,
    littleCrumb2UserSetValue: req.body.littleCrumb2UserSetValue,
    littleCrumb2History: req.body.littleCrumb2History,
    littleCrumb3Custom: req.body.littleCrumb3Custom,
    littleCrumb3CustomType: req.body.littleCrumb3CustomType,
    littleCrumb3CustomMaxValue: req.body.littleCrumb3CustomMaxValue,
    littleCrumb3UserSetValue: req.body.littleCrumb3UserSetValue,
    littleCrumb3History: req.body.littleCrumb3History,
    littleCrumb4Custom: req.body.littleCrumb4Custom,
    littleCrumb4CustomType: req.body.littleCrumb4CustomType,
    littleCrumb4CustomMaxValue: req.body.littleCrumb4CustomMaxValue,
    littleCrumb4UserSetValue: req.body.littleCrumb4UserSetValue,
    littleCrumb4History: req.body.littleCrumb4History,
    littleCrumb5Custom: req.body.littleCrumb5Custom,
    littleCrumb5CustomType: req.body.littleCrumb5CustomType,
    littleCrumb5CustomMaxValue: req.body.littleCrumb5CustomMaxValue,
    littleCrumb5UserSetValue: req.body.littleCrumb5UserSetValue,
    littleCrumb5History: req.body.littleCrumb5History
  };
  const newDietData = new UserDietDataModel(originalUserDietData);
  newDietData.save(error => {
    if (checkServerError(res, error)) {
      return;
    }
    res.status(201).json(newDietData);
    console.log('DietData successfully created.');
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
  getUserDietData,
  postUserDietData,
  putUserDietData,
  deleteUserDietData,
  getExistingUserDietData
};

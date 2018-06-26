
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema(
  {
    listId: {type: Number, required: true, unique: true},
    email: String,
    firstName: String,
    lastName: String,
    userName: String,
    startingWeight: Number,
    currentWeight: Number,
    height: String,
    age: Number
    // "id": 1,
    // "bigCrumbCustom": true,
    // "bigCrumbCustomType": "Syns",
    // "bigCrumbCustomMaxValue": 25,
    // "bigCrumbUserSetValue": 0,
    // "littleCrumb1Custom": true,
    // "littleCrumb1CustomType": "HEXMilk",
    // "littleCrumb1CustomMaxValue": 5,
    // "littleCrumb1UserSetValue": 0,
    // "littleCrumb2Custom": true,
    // "littleCrumb2CustomType": "HEXBread",
    // "littleCrumb2CustomMaxValue": 2,
    // "littleCrumb2UserSetValue": 0,
    // "littleCrumb3Custom": false,
    // "littleCrumb3CustomType": "Points",
    // "littleCrumb3CustomMaxValue": 0,
    // "littleCrumb3UserSetValue": 0,
    // "littleCrumb4Custom": false,
    // "littleCrumb4CustomType": "Points",
    // "littleCrumb4CustomMaxValue": 0,
    // "littleCrumb4UserSetValue": 0,
    // "littleCrumb5Custom": false,
    // "littleCrumb5CustomType": "Points",
    // "littleCrumb5CustomMaxValue": 0,
    // "littleCrumb5UserSetValue": 0
  }, {
    collection: 'userDetailsModels',
    read: 'nearest'
  },
  {versionKey: false}
);

const userDetailsModel = mongoose.model('userDetailsModel', userDetailsSchema);

module.exports = userDetailsModel;

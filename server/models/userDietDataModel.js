const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userDietDataSchema = new Schema(
  {
    userDietDataListId: String,
    today: String,
    bigCrumbCustom: Boolean,
    bigCrumbCustomType: String,
    bigCrumbCustomMaxValue: Number,
    bigCrumbUserSetValue:  Number,
    bigCrumbHistory: Array,
    littleCrumb1Custom: Boolean,
    littleCrumb1CustomType: String,
    littleCrumb1CustomMaxValue:  Number,
    littleCrumb1UserSetValue:  Number,
    littleCrumb1History: Array,
    littleCrumb2Custom: Boolean,
    littleCrumb2CustomType: String,
    littleCrumb2CustomMaxValue:  Number,
    littleCrumb2UserSetValue:  Number,
    littleCrumb2History: Array,
    littleCrumb3Custom: Boolean,
    littleCrumb3CustomType: String,
    littleCrumb3CustomMaxValue:  Number,
    littleCrumb3UserSetValue:  Number,
    littleCrumb3History: Array,
    littleCrumb4Custom: Boolean,
    littleCrumb4CustomType: String,
    littleCrumb4CustomMaxValue:  Number,
    littleCrumb4UserSetValue:  Number,
    littleCrumb4History: Array,
    littleCrumb5Custom: Boolean,
    littleCrumb5CustomType: String,
    littleCrumb5CustomMaxValue:  Number,
    littleCrumb5UserSetValue: Number,
    littleCrumb5History: Array
  }, {
    collection: 'dbCollection',
    read: 'nearest'
  },
  {versionKey: false}
);
const userDietDataModel = mongoose.model('userDietDataModel', userDietDataSchema);
module.exports = userDietDataModel;

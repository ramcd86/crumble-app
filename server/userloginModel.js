const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userLoginSchema = new Schema(
  {
    listId: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    dataId: {type: Number, required: true, unique: true},
  }, {
    collection: 'userLoginModels',
  read: 'nearest'
  },
  {versionKey: false}
);

const userLoginModel = mongoose.model('userLoginModel', userLoginSchema);

module.exports = userLoginModel;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
    id: {type: String, required: true, unique: true},
    email: {type: String},
    password: {type: String},
  dataId: {type: Number}
  }, {
    collection: 'userLoginModels'
  }
);

const userloginModel = mongoose.model('userloginModel', userLoginSchema);

module.exports = userloginModel;

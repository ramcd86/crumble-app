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
    weightHistory: Array,
    height: String,
    age: Number
  }, {
    collection: 'userDetailsModels',
    read: 'nearest'
  },
  {versionKey: false}
);
const userDetailsModel = mongoose.model('userDetailsModel', userDetailsSchema);
module.exports = userDetailsModel;

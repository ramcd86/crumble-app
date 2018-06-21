// import mongoose from 'mongoose';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userLogin = new Schema ({
  id: {type: String},
  email: {type: String},
  password: {type: String},
  data_id: {type: String}
});

module.exports = mongoose.model('userLogin', userLogin);

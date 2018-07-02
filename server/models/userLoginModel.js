// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');
// // const bcrypt = require('bcrypt');
// const userLoginSchema = new Schema(
//   {
//     listId: {type: Number, required: true, unique: true},
//     username: {type: String, required: true, unique: true}, //EMAIL
//     password: {type: String, required: true, unique: false},
//     dataId: {type: Number, required: true, unique: true},
//   }, {
//     collection: 'userLoginModels',
//   read: 'nearest'
//   }
// );
//
// // userLoginSchema.plugin(passportLocalMongoose);
// // userLoginSchema.methods.comparePassword = function (passw, cb) {
// //   bcrypt.compare(passw, this.password, function (err, isMatch) {
// //     if (err) {
// //       return cb(err);
// //     }
// //     cb(null, isMatch);
// //   });
// // };
//
//
// const userLoginModel = mongoose.model('userLoginModel', userLoginSchema);
// module.exports = userLoginModel;

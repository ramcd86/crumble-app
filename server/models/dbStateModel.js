const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbStateSchema = new Schema(
  {
    listId: Number,
    dbState: Number,
  }, {
    collection: 'dbCollection',
    read: 'nearest'
  },
  {versionKey: false}
);
const dbDStateModel = mongoose.model('dbDStateModel', dbStateSchema);
module.exports = dbDStateModel;

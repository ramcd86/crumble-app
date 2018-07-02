const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbStateSchema = new Schema(
  {
    listId: {type: Number, required: true, unique: true},
    dbState: {type: Number, required: true, unique: true}
  }, {
    collection: 'databaseState',
    read: 'nearest'
  },
  {versionKey: false}
);
const dbDStateModel = mongoose.model('dbDStateModel', dbStateSchema);
module.exports = dbDStateModel;

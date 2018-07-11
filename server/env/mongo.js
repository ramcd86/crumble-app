const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = `mongodb://localhost:27017`;
function connect () {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri);
}

module.exports = {
  connect,
  mongoose

};







const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const encodedPw = encodeURIComponent("C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==");
const mongoUri = `mongodb://localhost:${encodedPw}@localhost:10255/admin?ssl=true`;
function connect () {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri);
}
module.exports = {
  connect,
  mongoose
};







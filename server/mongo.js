const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = require('./env/environment');

// const mongoUri = `mongodb://${env.dbName};${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}?ssl=false`;

const mongoUri = `mongodb://crumbdb:QQbRwI0u3SRkfqbSrwZpbipv2NDWgCtuA2mTc1yStEzHYcLR3uWZbaWEoqVCckAB9mtoym3kESHONcPy6KMmQA%3D%3D@crumbdb.documents.azure.com:10255/?ssl=true`;

function connect () {
  return mongoose.connect(mongoUri);
}

module.exports = {
  connect
};

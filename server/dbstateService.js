const dbStateModel = require('../server/dbstateModel');
const ReadPreference = require('mongodb').ReadPreference;
require('./mongo').connect();

//// GET ALL USER DietData
function getDbState(req, res) {
  const docquery = dbStateModel.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(dbState => {
      res.status(200).json(dbState);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    })
}

//// GET EXISTING USER
function getExistingDbState(req, res) {
  const originalDbState = {
    listId: req.params.listId
  };
  const searchedObject = dbStateModel.findOne({
    listId: originalDbState.listId
  });
  searchedObject
    .exec()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).send(error);
    })
}

//// MODIFY EXISTING
function putDbState(req, res) {
  const originalDbState = {
    listId: req.params.listId,
    dbState: req.body.dbState
  };
  dbStateModel.findOne({listId: originalDbState.listId}, (error, DbState) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, DbState)) return;
    DbState.dbState = originalDbState.dbState;
    DbState.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(dbStateModel);
      console.log('DB State updated successfully!');
    });
  });
}

//// DELETE EXISTING
function deleteDbState(req, res) {
  const id = req.params.listId;
  dbStateModel.findOneAndRemove({listId: id})
    .then(user => {
      if (!checkFound(res, user)) return;
      res.status(200).json(user);
      console.log('DB State deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

//// POST NEW USER LOGIN
function postDbState(req, res) {
  const originalDbState = {
    listId: req.body.listId,
    dbState: req.body.dbState
  };
  const newDbState = new dbStateModel(originalDbState);
  newDbState.save(error => {
    if (checkServerError(res, error)) {
      return;
    }
    res.status(201).json(newDbState);
    console.log('DbState successfully created.');
  })
}

function checkFound(res, hero) {
  if (!hero) {
    res.status(404).send('Not found.');
    return;
  }
  return hero;
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

module.exports = {
  getDbState,
  postDbState,
  putDbState,
  deleteDbState,
  getExistingDbState
};

// import express from 'express';
// import userLogin from '../models/userLogin.model'

const express = require("express");
const userLogin = require('../models/userLogin');
// import userLogin from '../models/userLogin';
const userLoginRoute = express.Router();

userLoginRoute.route('/:id').get(
  (req, res) => {
    userLogin.find({}, (err, userLogin) => {
      res.json(userLogin)
    })
  }).post((req,res) => {
  let userLogin = new userLogin(req.body); // edited line
  userLogin.save()
  res.status(201).send(userLogin)
}).put((req,res) => {
  userLogin.findById(req.params.id, (err, userLogin) => {
    userLogin.email = req.body.email;
    userLogin.password = req.body.password;
    userLogin.data_id = req.body.data_id;
    userLogin.save()
    res.json(userLogin)
  })
}) .patch((req,res)=>{
  userLogin.findById(req.params.id, (err, userLogin) => {
    if(req.body._id){
      delete req.body._id;
    }
    for( let b in req.body ){
      userLogin[b] = req.body[b];
    }
    userLogin.save();
    res.json(userLogin);
  })
}).delete((req,res)=>{
  userLogin.findById(req.params.id, (err, userLogin) => {
    userLogin.remove(err => {
      if(err){
        res.status(500).send(err)
      }
      else{
        res.status(204).send('removed')
      }
    })
  })
});

module.exports = userLoginRoute;

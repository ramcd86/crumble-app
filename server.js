// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userLoginRoute = require("./server/routes/router");

const db = mongoose.connect('mongodb://crumbdb:QQbRwI0u3SRkfqbSrwZpbipv2NDWgCtuA2mTc1yStEzHYcLR3uWZbaWEoqVCckAB9mtoym3kESHONcPy6KMmQA%3D%3D@crumbdb.documents.azure.com:10255/?ssl=true');
const app = express();
const port = process.env.PORT || 5656;
// routes go here
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/router', userLoginRoute);






// // Get dependencies
// const express = require('express');
// const path = require('path');
// const http = require('http');
//
// const bodyParser = require('body-parser');
// const api = require('./server/routes/api');
// const app = express();
//
//
//
// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// // Point static path to dist
//
// // Set our api routes
// app.use('/api', api);
//
// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || '3000';
// app.set('port', port);
//
// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);
//
// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));

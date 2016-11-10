var Promise = require('bluebird');
var express = require('express');
var router = express.Router();

// Dependencies
var twitter = require('../controllers/twitter');

router.use(function(req, res, next) {
  console.log('API Router initiated!');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'Hello, world!' });
});

router.get('/api/:username', function(req, res) {
  res.json(twitter.getTweets(req.params.username));
  // twitter.getTweets(req.params.username).then(function(data) {
  //   res.json({ response: data });
  // });
});

// router.route('/example')
//   .post(function(req, res) {
//     // Do stuff...
//   })
//   .get(function(req, res) {
//     // Do other stuff...
//   });

module.exports = router;


// Popurri

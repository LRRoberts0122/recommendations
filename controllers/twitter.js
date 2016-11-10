var Twitter = require('twitter');
var Promise = require('bluebird');

Promise.promisifyAll(Twitter);

var auth = require('../config/twitter.js');

var client = new Twitter({
  consumer_key: auth['consumer_key'],
  consumer_secret: auth['consumer_secret'],
  access_token: auth['access_token'],
  access_token_secret: auth['access_token_secret']
});

client.get('statuses/user_timeline', {screen_name: 'lrroberts0122', count: 10}, function(error, tweets) {
  if(error) {
    console.log(error);
  } else {
    console.log(tweets);
  };
});

module.exports.getTweets = function(username) {
  var response = {
    message: 'Hello, ' + username
  };

  return response;

  // return new Promise(function(resolve, reject) {
  //   client.get('statuses/user_timeline', {
  //     screen_name: username,
  //     count: 10
  //   }, function(error, tweets) {
  //     if(error) {
  //       reject(error);
  //     } else {
  //       resolve(tweets);
  //     }
  //   });
  // });
}

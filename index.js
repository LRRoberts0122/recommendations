// configuration ===============================================================
var express = require('express');
var app = express();
var routes = require('./routes/api');

app.get('/hello', function(req, res) {
  res.json({response: 'Hello, world!'})
});

app.listen(process.env.PORT || 3000);

// routes ======================================================================
app.use('/', routes);

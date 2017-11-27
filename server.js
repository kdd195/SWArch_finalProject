// server.js
var cors = require('cors');
var app = require('./app');
//var port = process.env.PORT || 3000;

app.use(cors());

var server = app.listen(80, function() {
  console.log('Express server listening on port 80');
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var config = require('./config');
var router = require('./router.js'); //send traffic to this router

var app = express();
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);


app.listen(config.PORT_NUMBER, function () {
  console.log(`app listening on port ${config.PORT_NUMBER}!`);
});

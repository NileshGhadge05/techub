var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/assets/stylesheet/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'stylesheet', 'main.css'));
});

app.get('/ui/js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'js', 'main.js'));
});

app.get('/ui/assets/img/preview01.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'img', 'preview01.jpg'));
});

var port = 8080; 
app.listen(8080, function () {
  console.log(`app listening on port ${port}!`);
});

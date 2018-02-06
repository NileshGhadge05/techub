var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/dashboard.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dashboard.html'));
});


app.get('/ui/form-register.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'form-register.html'));
});

app.get('/ui/assets/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'css', 'style.css'));
});

app.get('/ui/assets/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'css', 'bootstrap.css'));
});

app.get('/ui/assets/css/ionicons.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'css', 'ionicons.css'));
});

app.get('/ui/assets/js/source/jquery.fancybox.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'source', 'jquery.fancybox.css'));
});

app.get('/ui/assets/css/form-register.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'css', 'form-register.css'));
});


app.get('/ui/assets/js/custom.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'custom.js'));
});

app.get('/ui/assets/js/jquery-1.11.1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'jquery-1.11.1.js'));
});


app.get('/ui/assets/js/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'bootstrap.js'));
});


app.get('/ui/assets/js/source/jquery.fancybox.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'source','jquery.fancybox.js'));
});

app.get('/ui/assets/js/jquery.isotope.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'jquery.isotope.js'));
});

app.get('/ui/assets/js/scrollReveal.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'js', 'scrollReveal.js'));
});

app.get('/ui/assets/img/logo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'assets', 'img', 'logo.png'));
});

var port = 8080; 
app.listen(8080, function () {
  console.log(`app listening on port ${port}!`);
});

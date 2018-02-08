var express = require('express');
var path = require('path');
var router = express.Router();
var config = require('config');

//Default routing
router.get('/*', function (req, res) {
  res.redirect('/');
});

module.exports = router;

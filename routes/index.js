var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Overview' });
});
router.get('/getting-started', function (req, res, next) {
  res.render('getting-started', { title: 'Getting Started' });
});

module.exports = router;

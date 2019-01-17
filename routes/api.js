
/**
	API function routing file
*/

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('apiViews/apiView', { title: 'API accessing' });
});

module.exports = router;


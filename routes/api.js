
/**
	API function routing file
*/

var express = require('express');
var router = express.Router();

var apiModal=require("../models/apiModal1.js"); //exported apiModal

router.get('/j', function(req, res, next) {
	//res.render('apiViews/apiView', { title: 'API accessing' });
	/* this function is passed as a parameter to getAllJson(callback); */
	apiModal.getAllJson(function(err, rows){ 
		if(err)
			res.status(401).json( {"status":"failed", "info":err} );
		else
			res.status(201).json( {"status":"success", data:rows} );
	});
	//res.status(201).json({ json:"ok" });
});


router.get('/', function(req, res, next) {
	//res.render('apiViews/apiView', { title: 'API accessing' });
	apiModal.getAll();
	//res.status(201).json({ json:"ok" });
});


router.get('/2', function(req, res, next) {
	//res.render('apiViews/apiView', { title: 'API accessing' });
	//con.
	res.render('apiViews/apiIndex', { title: 'API accessing' });
});


router.get('/1', function(req, res, next) {
	//res.render('apiViews/apiView', { title: 'API accessing' });
	//con.
	res.render('apiViews/apiView', { title: 'API accessing' });
});

module.exports = router;


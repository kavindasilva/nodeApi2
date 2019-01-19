
/**
	API function routing file
*/

var express = require('express');
var router = express.Router();

var apiModal=require("../models/apiModal1.js"); //exported apiModal

// view all
router.get('/j', function(req, res, next) {
	//res.render('apiViews/apiView', { title: 'API accessing' });
	/* this function is passed as a parameter to getAllJson(callback); */
	apiModal.getAllJson(function(err, rows){ 
		res.header( "Content-Type", "application/json" );
		res.header( "Access-Control-Allow-Origin", "*" );
		//res.header( "Content-Type", "application/json" );
		if(err)
			res.status(403).json( {"status":"failed", "info":err} );
		else
			//res.status(201).json( JSON.stringify({"status":"success", "data":rows}) );
			res.status(201).json( {"status":"success", "data":rows} );
			//res.json( {"status":"success", "data":rows} );
	});
	//res.status(201).json({ json:"ok" });
});


router.post("/add", function(req, res, next){
	//prepare
	apiModal.addNew(req.body, function(err, newID){
		res.header( "Content-Type", "application/json" );
		res.header( "Access-Control-Allow-Origin", "*" );
		if(err)
			res.status(403).json( {"status":"failed", info:{ node:err, "Req":req.body} } );
			//res.status(403).json( {"status":"failed", "nested":{ "ss":"S", "gg":"G" } } ); //working
		else
			res.json( {"status":"success", info: req.body});
	});
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



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
			res.status(500).json( {"status":"failed", "action":"view all", "info":err} );
		else
			//res.status(201).json( JSON.stringify({"status":"success", "data":rows}) );
			res.status(201).json( {"status":"success", "action":"view all", "data":rows} );
			//res.json( {"status":"success", "data":rows} );
	});
	//res.status(201).json({ json:"ok" });
});

// view only one
router.get('/view/:id', function(req, res, next) {
	if(!req.params.id){
		res.status(406).json( {"status":"failed", "action":"load edit", "msg": "No ID supplied"} );
	}
	apiModal.getOne(req.params.id, function(err, rows){ 
		res.header( "Content-Type", "application/json" );
		res.header( "Access-Control-Allow-Origin", "*" );
		if(err)
			res.status(500).json( {"status":"failed", "action":"view one ", "info":err} );
		else
			res.status(201).json( {"status":"success", "action":"view one", "data":rows} );
	});
});


router.put("/save", function(req, res, next){
	apiModal.saveItem(req.body, function(err, rows){
		res.header( "Content-Type", "application/json" );
		//res.header( "Access-Control-Allow-Origin", "*" );
		if(err)
			res.status(500).json( {"status":"failed", "action":"update item", info:{ node:err, "Req":req.body} } );
			//res.status(403).json( {"status":"failed", "nested":{ "ss":"S", "gg":"G" } } ); //working
		else
			res.json( {"status":"success", "action":"update item", info: req.body});
	});
});


router.post("/add", function(req, res, next){
	apiModal.addNew(req.body, function(err, newID){
		res.header( "Content-Type", "application/json" );
		//res.header( "Access-Control-Allow-Origin", "*" );
		if(err)
			res.status(500).json( {"status":"failed", "action":"add item", info:{ node:err, "Req":req.body} } );
			//res.status(403).json( {"status":"failed", "nested":{ "ss":"S", "gg":"G" } } ); //working
		else
			res.json( {"status":"success", "action":"add item", info: req.body});
	});
});


router.delete("/delete/:id", function(req, res,next){
	if(!req.params.id){
		console.log("no delete id supplied");
		res.status(406).json( {"status":"failed", "action":"delete", "msg": "No ID supplied"} );
	}
	apiModal.delete(req.params.id, function(err, count){
		//res.header( "Access-Control-Allow-Origin", "http://127.0.0.1" );
		res.header( "Content-Type", "application/json" );
		//res.header( "Access-Control-Allow-Origin", "*" );
		//res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		//res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");

		if(err)
			res.status(500).json( {"status":"error", "action":"delete", info:{ node:err, "Req":req.body} } );
		else
			res.json( {"status":"success", "action":"delete", info: req.body, "count":count});
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


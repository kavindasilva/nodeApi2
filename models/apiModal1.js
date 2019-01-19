
/**
	API functions Modal file1
*/

var express = require('express');
var router = express.Router();
//var dbcon=require("./dbcon");
var conn=require("./dbcon2");

var apiModal={
	getAll:function(){
		console.log("getall called");
		let sql="select * from enc1; ";
		conn.query(sql, function (err, result, fields) {
			if (err) throw err;
			console.log(result);
		});
	},

	getAllJson:function(callback){
		//console.log("getall called");
		let sql="select * from enc1; ";
		conn.query(sql, callback);
	},

	getOne:function(){

	}
}

/*con.query("SELECT * FROM enc1", function (err, result, fields) {
	if (err) throw err;
	console.log(result);
});*/


//module.exports = router;
module.exports = apiModal;


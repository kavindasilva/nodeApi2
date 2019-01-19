
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

	addNew:function(postData,callback){
 		//return conn.query("Insert into enc1 values(null,?,?,?)",[postData.email,postData.pass,postData.pic],callback); // this handles sqli
 		return conn.query("Insert into enc1 values(null,'"+postData.email+"', '"+postData.pass+"','"+postData.pic+"')",callback); // this provides error on sqli
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


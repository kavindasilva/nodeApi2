
<?php

/**
	This file used to access api from 127.0.0.1:80
*/



?>

<!DOCTYPE html>
<html>
<head>
	<title>API accessing</title>
	<link rel="stylesheet" type="text/css" href="../public/stylesheets/bootstrap.min.css">
</head>
<body>
	<script type="text/javascript" src="../public/javascripts/apiJs1.js"></script>
	<div class="row">
		<div class="col-md-4 col-sm-4">
			<button value="BTN1" class="btn btn-success" onclick="getAllData();">View</button>
		</div>

		<div class="col-md-8 col-sm-8">
			<div id="data1">
				initial data
			</div>
		</div>
	</div>


	<script type="text/javascript" src="../public/javascripts/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="../public/javascripts/bootstrap.min.js"></script>
	

	<script type="text/javascript">
		/*$.ajax({
			type: "get",
			url: "http://127.0.0.1:3000/api/j",
			data: { str: "hi"},
			success: function(data, status){
				//
				console.log(data);
				console.log(status);
				$("#data1").empty().append(printAllData(data));
			},
			error: function(err){
				console.log(err);
			}
		});*/
	</script>

</body>
</html>
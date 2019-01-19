
/**
	JS functions used to display data taken from API
*/


function insertNew(){
	$id=$("#id").val();
	$email=$("#email").val();
	$pass=$("#pass").val();
	$pic=$("#pic").val();
	$.ajax({
		type:"POST",
		url: "http://127.0.0.1:3000/api/add",
		data: { email: $email, pass:$pass, pic:$pic },
		success: function(data, status){
			console.log(data);
			getAllData();
		}
	});
}


function getAllData(){
	$.ajax({
		type: "GET",
		url: "http://127.0.0.1:3000/api/j",
		data: {},
		success: function(data, status){
			//
			console.log(data);
			$("#data1").empty().append(printAllData(data));
		},
		error: function(err){
			console.log(err);
		}
	});
}


/* Returns the String to Append to an element */
function printAllData(data){
	//$("#data1").empty();
	appendStr="<table><tr> <th>ID</th> <th>Email</th> <th>Password</th> <th>Picture</th> </tr>";
	for(i of data.data){
		//appendStr+= "<tr> <td>"+i.id+"</td> <td>"+i.email+"</td> <td>"+i.pass+"</td> <td>"+i.pic+"</td> </tr>";
		appendStr+= "<tr> <td>"+i.id+"</td> <td>"+i.email+"</td> <td>"+i.pass+"</td> <td>"+i.pic+"</td>"+
			"<td><button class='btn btn-default'>E</button></td>"+
			"<td><button class='btn btn-danger'>D</button></td> </tr>";
	}
	appendStr+="</table>";

	//$("#data1").append(appendStr);

	return appendStr;

}


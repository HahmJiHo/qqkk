$('#email').keyup(function() {  	
	var email = $(this).val();

	$.ajax({
		url : 'http://localhost:8989/teamproject/index.html',
		dataType: "jsonp",
		jsonpCallback: 'callback',
        contentType: "application/json; charset=UTF-8",
		data: ({
			email : email
		}),
		success : function(response) {
			if (JSON.stringify(response).length > 3) {
				$('#checkedEmail').html("이미 가입된 이메일 입니다");
			} else if (JSON.stringify(response).length < 3){				
				$('#checkedEmail').html("사용 가능한 이메일 입니다.");
			} 	 
			if ($("#email").val() == 0){
				$('#checkedEmail').html("");
			}		
		},
		 error: function(jqXHR, textStatus, errorThrown) {
	            console.log('error : ' + textStatus + " " + errorThrown);
	     }

	}); 

});




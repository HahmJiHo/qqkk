function ajaxReplyList() {
	 $.ajaxSetup ({  
	        cache: false  
	    });  
	 setInterval(function(){
	$.getJSON(serverAddr + "/replyContent/list.json", function(obj) {
		var result = obj.jsonResult

		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.-re")
			return
		} 

		var contents = ""
		var arr = result.data	

		for (var i in arr) {					
			if ($('#groupName').attr('data-value') == arr[i].groupNo) {					
				if ($("#userName").text() ==  arr[i].name) {
					 contents +=  "<span class='listNickName' style='font-weight:bold; float:right; display:block; max-width: 300px; clear:both'>" + arr[i].name +"</span>" +
					"<span class='listNickName'  style='float:right; display:block; clear:both'> <img src='../upload/" +arr[i].fileName+ "'style='width: 30px; height: 30px; border-radius: 50%'/></span>" +
					"<div class='bubble-me' style='float:right;'>" +			   			
					"<ul style='float:right; clear:both;'>" +
					"<li id='no' style='display:none'>" + arr[i].no + "</li>" +									
					"<li>" + arr[i].content + " </li>" +        						
					"</ul>" + 
					"</div>";
				} else {
					contents += "<span class='listNickName' style='font-weight:bold; float:left; display:block; max-width: 300px; clear:both'>" + arr[i].name +"</span>" +
					"<span class='listNickName' style='float:left; display:left; clear:both'> <img src='../upload/" + arr[i].fileName + "'style='width: 30px; height: 30px; border-radius: 50%'/></span>" +
					"<div class='bubble' style='float:left;'>" +   				  				
					"<ul style='float:left; clear:both'>" +
					"<li id='no' style='display:none'>" + arr[i].no + "</li>" +							
					"<li>" + arr[i].content + "</li>" +        				
					"<li class='delBtnList'>" + ' ' + "</li>" +			
					"</ul>" + 
					"</div>";
				}
			}
		}
		
		$("#board-Table").html(contents)
	})
	 }, 1500);
}

$(".reflash").click(function(e) {
	 ajaxReplyList()
})
/*function ajaxLoginUser() {
	$.getJSON(serverAddr +"/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			$(".my-login").css("display", "none")
			return
		} 	
		$("#userName").text(result.data.name)
		$("#nicknm").text(result.data.nicknm)
		$("#userName").attr('data-value', result.data.no)
	})
}*/
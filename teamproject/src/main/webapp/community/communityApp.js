var resultUser = []




$("#loginBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})

$("#logoutBtn").click(function (e) {
	location.href = "../auth/authApp.html"
})


$("#writeBtn").click(function (e) {
	if (resultUser.data == null) {
		alert("로그인하세요")
		location.href = "../index_h.html"
		return
	  } 
	location.href = "communityForm.html"
})		


/*$("#writeBtn").click(function (e) {
	if (resultUser.data == null) {
		alert("로그인하세요")
		window.location.reload()
		return
		location.href = "../index_h.html"
	} 
	location.href = "communityForm.html"
})	
*/





function ajaxCommunityList() {
	$.getJSON(serverAddr + "/community/list.json", function(obj) {
		var result = obj.jsonResult

		if (result.state != "success") {
	    	 alert("커뮤니티: 서버에서 데이터를 가져오는데 실패했습니다.")
	    	 return
	    }
		
	    var template = Handlebars.compile($('#divTemplateText').html())
	    $("#communityDiv div").html(template(result))
	    
	    $(".titleLink").click(function(event) {
		    window.location.href = "communityForm.html?no=" + $(this).attr("data-no")
		    
	    })
    })
}


	
	
function ajaxLoginUser() {
	$.getJSON(serverAddr + "/auth/loginUser.json", function(obj) {
		resultUser = obj.jsonResult
	    if (resultUser.state != "success") { // 로그아웃 상태일 경우 로그인 상태와 관련된 태그를 감춘다.
	         $('.my-login').css("display", "none")
	         return
	    }
	      
	    $('.my-logout').css("display", "none")
	      
	    $("#userName").text(resultUser.data.name);
	    $("#userNo2").attr('data-value', resultUser.data.no);
	    $("#userNo3").attr('data-value', resultUser.data.no);
    })
}



function createdatawithcheck(data){
	 //
	 var sec = 60;
	 var mins = 60;
	 var hours = 24;
	 var days = 7;
	 var month =12;
	 
	 //시간차 비교
	 //현재시간 - 등록된시간
	 
	 //현재시간
	 var tday = new Date();
	 var cday = new Date(data);
	 var difftime = Math.floor((tday - cday)/1000);
	 var msg="";
	 if(data == "0000-00-00 00:00:00"){
	  
	  msg = 0;
	  
	  }else
	 
	 if(difftime < sec){
	  msg="방금";
	 }else if((difftime /=sec) < mins){
	  
	  msg=Math.floor(difftime) + "분";
	 }else if((difftime /=mins) < hours){
	  
	  msg=Math.floor(difftime) + "시간";
	 }else if((difftime /=hours) < days){
	  
	  msg=Math.floor(difftime) + "일";
	 }else if((difftime /=days) < month){
	  
	  msg=Math.floor(difftime) + "달";
	 }else {
	  
	  msg=Math.floor(difftime) + "년";
	 }
	return msg;
	 } 






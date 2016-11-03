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
		window.location.reload()
		return
	  } 
	location.href = "communityForm.html"
})	






function ajaxCommunityList() {
	$.getJSON(serverAddr + "/community/list.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
	    	 alert("서버에서 데이터를 가져오는데 실패했습니다. 커뮤니티")
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










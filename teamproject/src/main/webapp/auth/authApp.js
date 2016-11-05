$("#id02").on('click', "#loginBtn", function(event) { 
	var user = {
			email: $("#LoginEmail").val(),
			password: $("#LoginPassword").val(),
			saveEmail: $("#saveEmail").is(":checked") 
	}
	 console.log(user)
	ajaxLogin(user)
}); 

function ajaxLogin(user) {
	$.ajax({
		url : serverAddr + "/auth/login.json",
		method : "POST",
		dataType : "json",
		data : user,
		success : function(obj) {
			var result = obj.jsonResult
			if (result.state != "success") {
				alert("로그인 실패 입니다.\n 이메일 또는 암호를 확인하세요.")       
				return
			} 
			window.location.href = serverAddr + "/myschedule/MySchedule.html"		
		},
		error : function(msg) {
			alert(msg)
		}
	})
}






function ajaxLogout(user) {
	$.getJSON( serverAddr +"/auth/logout.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") 
			console.log("로그아웃 실패 입니다.")
	})
}

function init() {
	var cookieMap = bit.cookieToObject()

	// if ("eamil" in cookieMap) // 쿠키맵 객체에 이메일이라는 이름의 프로퍼티가 있는가
	if ("email" in cookieMap) { // 쿠키맵 객체에 이름으로 저장된 값이 있는가?
		$("#email").val(cookieMap["email"])
		$("#saveEmail").attr("checked", true)
	}

}

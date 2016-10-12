function ajaxLoginUser() {
	$.getJSON(serverAddr +"/auth/loginUser.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			$(".my-login").css("display", "none")
			return
		} 	
		$("#userName").text(result.data.name)
		$("#nicknm").text(result.data.nicknm)
	})
}
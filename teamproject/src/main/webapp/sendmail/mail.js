function ajaxGroupList() {
	$.getJSON(serverAddr +"/sendmail/mail.json" , function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패 했습니다.")
			return
		} 

	         
	})
}